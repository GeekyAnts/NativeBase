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

type ITransitionConfig = {
  type?: 'spring' | 'timing';
  [key: string]: any;
};

interface ITransitionProps extends ViewProps {
  onTransitionComplete?: (s: 'entered' | 'exited') => void;
  initial: ISupportedTransitions;
  entry: ISupportedTransitions & { transition?: ITransitionConfig };
  exit: ISupportedTransitions & { transition?: ITransitionConfig };
  children?: any;
  visible?: boolean;
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
  duration: 200,
};

const defaultEntryTransition = { ...defaultTransitionConfig, duration: 250 };
const defaultExitTransition = { ...defaultTransitionConfig, duration: 200 };

export const Transition = forwardRef(
  (
    {
      children,
      onTransitionComplete,
      visible = false,
      initial,
      entry,
      exit,
      style,
    }: ITransitionProps,
    ref: any
  ) => {
    const animateValue = React.useRef(new Animated.Value(0)).current;

    const [animationState, setAnimationState] = React.useState(
      visible ? 'entering' : 'exited'
    );

    const prevVisible = React.useRef(visible);

    React.useEffect(() => {
      const entryTransition = {
        ...defaultEntryTransition,
        ...entry?.transition,
      };

      if (visible) {
        Animated[entryTransition.type ?? 'timing'](animateValue, {
          toValue: 1,
          useNativeDriver: true,
          ...entryTransition,
        }).start(() => {
          onTransitionComplete && onTransitionComplete('entered');
          setAnimationState('entered');
        });
      }
    }, [visible, onTransitionComplete, animateValue, entry]);

    React.useEffect(() => {
      // Exit request
      if (prevVisible.current !== visible && !visible) {
        setAnimationState('exiting');
      }
      prevVisible.current = visible;
    }, [visible]);

    React.useEffect(() => {
      const exitTransition = {
        ...defaultExitTransition,
        ...exit?.transition,
      };

      if (animationState === 'exiting') {
        Animated[exitTransition.type ?? 'timing'](animateValue, {
          toValue: 0,
          useNativeDriver: true,
          ...exitTransition,
        }).start(() => {
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

    if (!visible && animationState === 'exited') {
      return null;
    }

    // If exit animation is present and state is exiting, we replace 'initial' with 'exit' animation
    initial =
      animationState === 'exiting' && exit
        ? { ...defaultStyles, ...exit }
        : { ...defaultStyles, ...initial };

    entry = { ...defaultStyles, ...entry };

    return (
      <Animated.View
        pointerEvents="box-none"
        // https://github.com/facebook/react-native/issues/23090#issuecomment-710803743
        needsOffscreenAlphaCompositing
        style={[getAnimatedStyles(animateValue)(initial, entry), style]}
        ref={ref}
      >
        {children}
      </Animated.View>
    );
  }
);
