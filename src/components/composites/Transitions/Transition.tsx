import { cloneDeep } from 'lodash';
import React, { forwardRef } from 'react';
import { Animated, ViewProps } from 'react-native';

type ISupportedTransitions = {
  opacity?: number;
  translateY?: number;
  translateX?: number;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  rotate?: string;
};

const transformStylesMap = {
  translateY: true,
  translateX: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  rotate: true,
};

const defaultStyles = {
  opacity: 1,
  translateY: 0,
  translateX: 0,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  rotate: '0deg',
};

type ITransitionConfigSpring = {
  type?: 'spring';
  overshootClamping?: boolean;
  restDisplacementThreshold?: number;
  restSpeedThreshold?: number;
  velocity?: number | { x: number; y: number };
  bounciness?: number;
  speed?: number;
  tension?: number;
  friction?: number;
  stiffness?: number;
  mass?: number;
  damping?: number;
  delay?: number;
  duration?: number;
  useNativeDriver?: boolean;
};

type ITransitionConfigTiming = {
  type?: 'timing';
  easing?: (value: number) => number;
  duration?: number;
  delay?: number;
  useNativeDriver?: boolean;
};

type ITransitionConfig = ITransitionConfigSpring | ITransitionConfigTiming;

interface ITransitionProps extends ViewProps {
  onTransitionComplete?: (s: 'entered' | 'exited') => void;
  initial?: ISupportedTransitions;
  animate?: ISupportedTransitions & { transition?: ITransitionConfig };
  exit?: ISupportedTransitions & { transition?: ITransitionConfig };
  children?: any;
  visible?: boolean;
  as?: any;
}

const getAnimatedStyles = (animateValue: any) => (
  initial: ISupportedTransitions,
  to: ISupportedTransitions
) => {
  const styles: any = {
    transform: [],
  };

  for (let key in initial) {
    if (key === 'transition') {
      continue;
    }

    if (key in transformStylesMap) {
      styles.transform?.push({
        [key]: animateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [(initial as any)[key], (to as any)[key]],
        }),
      } as any);
    } else {
      styles[key] = animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [(initial as any)[key], (to as any)[key]],
      });
    }
  }

  return styles;
};

const defaultTransitionConfig: ITransitionConfig = {
  type: 'timing',
  useNativeDriver: true,
  duration: 250,
  delay: 0,
};

const Transition = forwardRef(
  (
    {
      children,
      onTransitionComplete,
      visible = false,
      initial,
      animate,
      exit,
      style,
      as,
      ...rest
    }: ITransitionProps,
    ref: any
  ) => {
    const animateValue = React.useRef(new Animated.Value(0)).current;

    const Component = React.useMemo(() => {
      if (as) {
        return Animated.createAnimatedComponent(as);
      }
      return Animated.View;
    }, [as]);

    const [animationState, setAnimationState] = React.useState(
      visible ? 'entering' : 'exited'
    );

    const prevVisible = React.useRef(visible);

    React.useEffect(
      function startEntryTransition() {
        const entryTransition = {
          ...defaultTransitionConfig,
          ...animate?.transition,
        };

        if (visible) {
          Animated.sequence([
            // @ts-ignore - delay is present in defaultTransitionConfig
            Animated.delay(entryTransition.delay),
            Animated[entryTransition.type ?? 'timing'](animateValue, {
              toValue: 1,
              useNativeDriver: true,
              ...entryTransition,
            }),
          ]).start(() => {
            setAnimationState('entered');
            onTransitionComplete && onTransitionComplete('entered');
          });
        }
      },
      [visible, onTransitionComplete, animateValue, animate]
    );

    React.useEffect(() => {
      // Exit request
      if (prevVisible.current !== visible && !visible) {
        setAnimationState('exiting');
      }
      prevVisible.current = visible;
    }, [visible]);

    React.useEffect(
      function startExitTransition() {
        const exitTransition = {
          ...defaultTransitionConfig,
          ...exit?.transition,
        };

        if (animationState === 'exiting') {
          Animated.sequence([
            // @ts-ignore - delay is present in defaultTransitionConfig
            Animated.delay(exitTransition.delay),
            Animated[exitTransition.type ?? 'timing'](animateValue, {
              toValue: 0,
              useNativeDriver: true,
              ...exitTransition,
            }),
          ]).start(() => {
            setAnimationState('exited');
            onTransitionComplete && onTransitionComplete('exited');
          });
        }
      },
      [
        exit,
        onTransitionComplete,
        setAnimationState,
        animationState,
        animateValue,
      ]
    );

    // If exit animation is present and state is exiting, we replace 'initial' with 'exit' animation
    initial =
      animationState === 'exiting' && exit
        ? { ...defaultStyles, ...exit }
        : { ...defaultStyles, ...initial };

    animate = { ...defaultStyles, ...animate };

    const styles = React.useMemo(() => {
      return [
        getAnimatedStyles(animateValue)(
          initial as ISupportedTransitions,
          animate as ISupportedTransitions
        ),
        style,
      ];
    }, [animateValue, initial, animate, style]);

    return (
      <Component
        pointerEvents="box-none"
        // https://github.com/facebook/react-native/issues/23090#issuecomment-710803743
        needsOffscreenAlphaCompositing
        style={styles}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

interface IStaggerConfig {
  offset: number;
  reverse?: boolean;
}
interface IStaggerProps {
  children: any;
  initial?: ISupportedTransitions;
  animate?: ISupportedTransitions & {
    transition?: ITransitionConfig & { stagger?: IStaggerConfig };
  };
  exit?: ISupportedTransitions & {
    transition?: ITransitionConfig & { stagger?: IStaggerConfig };
  };
  visible?: boolean;
}

const defaultStaggerConfig: IStaggerConfig = { offset: 0, reverse: false };

export const Stagger = ({ children, ...restProps }: IStaggerProps) => {
  return React.Children.map(children, (child, index) => {
    const clonedAnimationConfig = cloneDeep(restProps);
    const { animate, exit } = clonedAnimationConfig;

    if (animate) {
      if (!animate.transition) {
        animate.transition = {};
      }
      animate.transition.delay = animate.transition.delay ?? 0;
      const stagger = animate.transition.stagger ?? defaultStaggerConfig;
      const offset = stagger.reverse
        ? (React.Children.count(children) - 1 - index) * stagger.offset
        : index * stagger.offset;
      animate.transition.delay = animate.transition.delay + offset;
    }

    if (exit) {
      if (!exit.transition) {
        exit.transition = {};
      }
      exit.transition.delay = exit.transition.delay ?? 0;
      const stagger = exit.transition.stagger ?? defaultStaggerConfig;
      const offset = stagger.reverse
        ? (React.Children.count(children) - 1 - index) * stagger.offset
        : index * stagger.offset;
      exit.transition.delay = exit.transition.delay + offset;
    }

    return (
      <PresenceTransition key={child.key} {...clonedAnimationConfig}>
        {child}
      </PresenceTransition>
    );
  });
};

Stagger.displayName = 'Stagger';

export const PresenceTransition = forwardRef(
  (
    { visible = false, onTransitionComplete, ...rest }: ITransitionProps,
    ref: any
  ) => {
    const [animationExited, setAnimationExited] = React.useState(true);
    if (!visible && animationExited) {
      return null;
    }

    return (
      <Transition
        visible={visible}
        onTransitionComplete={(state) => {
          if (state === 'exited') {
            setAnimationExited(true);
          } else {
            setAnimationExited(false);
          }
          onTransitionComplete && onTransitionComplete(state);
        }}
        {...rest}
        ref={ref}
      />
    );
  }
);
