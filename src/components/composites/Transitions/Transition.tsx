import { cloneDeep } from 'lodash';
import React, { forwardRef, Fragment } from 'react';
import { Animated, ViewProps } from 'react-native';

console.log('man ', Animated);
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
  backgroundColor: 'transparent',
};

type ITransitionConfig = {
  type?: 'spring' | 'timing';
  [key: string]: any;
};

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
  duration: 0,
  delay: 0,
};

// const defaultEntryTransition = { ...defaultTransitionConfig, duration: 250 };
// const defaultExitTransition = { ...defaultTransitionConfig, duration: 200 };

export const Transition = forwardRef(
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

    React.useEffect(() => {
      const entryTransition = {
        ...defaultTransitionConfig,
        ...animate?.transition,
      };

      if (visible) {
        Animated.sequence([
          Animated.delay(entryTransition.delay),
          Animated[entryTransition.type ?? 'timing'](animateValue, {
            toValue: 1,
            useNativeDriver: true,
            ...entryTransition,
          }),
        ]).start(() => {
          onTransitionComplete && onTransitionComplete('entered');
          setAnimationState('entered');
        });
      }
    }, [visible, onTransitionComplete, animateValue, animate]);

    React.useEffect(() => {
      // Exit request
      if (prevVisible.current !== visible && !visible) {
        setAnimationState('exiting');
      }
      prevVisible.current = visible;
    }, [visible]);

    React.useEffect(() => {
      const exitTransition = {
        ...defaultTransitionConfig,
        ...exit?.transition,
      };

      if (animationState === 'exiting') {
        Animated.sequence([
          Animated.delay(exitTransition.delay),
          Animated[exitTransition.type ?? 'timing'](animateValue, {
            toValue: 0,
            useNativeDriver: true,
            ...exitTransition,
          }),
        ]).start(() => {
          onTransitionComplete && onTransitionComplete('exited');
          setAnimationState('exited');
        });
      }
    }, [
      exit,
      onTransitionComplete,
      setAnimationState,
      animationState,
      animateValue,
    ]);

    // If exit animation is present and state is exiting, we replace 'initial' with 'exit' animation
    initial =
      animationState === 'exiting' && exit
        ? { ...defaultStyles, ...exit }
        : { ...defaultStyles, ...initial };

    animate = { ...defaultStyles, ...animate };

    return (
      <Component
        pointerEvents="box-none"
        // https://github.com/facebook/react-native/issues/23090#issuecomment-710803743
        needsOffscreenAlphaCompositing
        style={[getAnimatedStyles(animateValue)(initial, animate), style]}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

interface IStaggerProps {
  children: any;
  initial?: ISupportedTransitions;
  animate?: ISupportedTransitions & { transition?: ITransitionConfig };
  exit?: ISupportedTransitions & { transition?: ITransitionConfig };
  as?: any;
  visible?: boolean;
}

export const Stagger = ({
  children,
  as,
  ...animationConfig
}: IStaggerProps) => {
  const WrapperComponent = as ? as : Fragment;
  return (
    <WrapperComponent {...animationConfig}>
      {React.Children.map(children, (child, index) => {
        const clonedAnimationConfig = cloneDeep(animationConfig);
        if (clonedAnimationConfig.animate) {
          if (!clonedAnimationConfig.animate.transition) {
            clonedAnimationConfig.animate.transition = {};
          }
          clonedAnimationConfig.animate.transition.delay =
            clonedAnimationConfig.animate.transition.delay ?? 0;
          const stagger = clonedAnimationConfig.animate.transition.stagger;
          const offset = stagger.reverse
            ? (React.Children.count(children) - 1 - index) * stagger.offset
            : index * stagger.offset;
          clonedAnimationConfig.animate.transition.delay =
            clonedAnimationConfig.animate.transition.delay + offset;
        }
        if (clonedAnimationConfig.exit) {
          if (!clonedAnimationConfig.exit.transition) {
            clonedAnimationConfig.exit.transition = {};
          }
          clonedAnimationConfig.exit.transition.delay =
            clonedAnimationConfig.exit.transition.delay ?? 0;
          const stagger = clonedAnimationConfig.exit.transition.stagger;
          const offset = stagger.reverse
            ? (React.Children.count(children) - 1 - index) * stagger.offset
            : index * stagger.offset;
          clonedAnimationConfig.exit.transition.delay =
            clonedAnimationConfig.exit.transition.delay + offset;
        }
        return (
          <PresenceTransition key={child.key} {...clonedAnimationConfig}>
            {child}
          </PresenceTransition>
        );
      })}
    </WrapperComponent>
  );
};

Stagger.displayName = 'Stagger';

// const defaultEntryTransition = { ...defaultTransitionConfig, duration: 250 };
// const defaultExitTransition = { ...defaultTransitionConfig, duration: 200 };

export const PresenceTransition = forwardRef(
  (
    { visible = false, onTransitionComplete, ...rest }: ITransitionProps,
    ref: any
  ) => {
    const [animationExited, setAnimationExited] = React.useState(true);
    console.log('ejej ', visible);
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
