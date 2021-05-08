import React from 'react';
import { Animated, ViewProps } from 'react-native';
type ISupportedTransitions = {
  opacity?: number;
  translateY?: number;
  translateX?: number;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  rotate?: number;
};

const defaultStyles = {
  opacity: 1,
  translateY: 0,
  translateX: 0,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  rotate: 0,
};

type AnimationConfig = {
  spring?: Animated.SpringAnimationConfig;
  timing?: Animated.TimingAnimationConfig;
};

interface ITransitionProps extends ViewProps {
  onTransitionComplete?: (s: 'entered' | 'exited') => void;
  from: ISupportedTransitions;
  entry: ISupportedTransitions;
  exit: ISupportedTransitions;
  exitTransition?: AnimationConfig;
  entryTransition?: AnimationConfig;
  transition?: AnimationConfig;
  children?: any;
  visible?: boolean;
  exitDuration?: number;
  entryDuration?: number;
}

const transformStyles = {
  translateY: true,
  translateX: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  rotate: true,
};

const getAnimatedStyles = (animateValue: any) => (
  from: ISupportedTransitions,
  to: ISupportedTransitions
) => {
  const styles: any = {
    transform: [],
  };

  for (let key in from) {
    if (key in transformStyles) {
      styles.transform?.push({
        [key]: animateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [(from as any)[key], (to as any)[key]],
        }),
      } as any);
    } else {
      styles[key] = animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [(from as any)[key], (to as any)[key]],
      });
    }
  }

  return styles;
};

export const Transition = ({
  children,
  onTransitionComplete,
  visible = false,
  from,
  entry,
  exit,
  exitDuration = 200,
  entryDuration = 250,
  transition,
  style,
}: ITransitionProps) => {
  const animateValue = React.useRef(new Animated.Value(0)).current;

  const [animationState, setAnimationState] = React.useState(
    visible ? 'entering' : 'exited'
  );

  const prevVisible = React.useRef(visible);

  React.useEffect(() => {
    if (visible) {
      Animated.timing(animateValue, {
        toValue: 1,
        duration: entryDuration,
        useNativeDriver: true,
        ...transition,
      }).start(() => {
        onTransitionComplete && onTransitionComplete('entered');
        setAnimationState('entered');
      });
    }
  }, [visible, onTransitionComplete, animateValue, entryDuration, transition]);

  React.useEffect(() => {
    // Exit request
    if (prevVisible.current !== visible && !visible) {
      setAnimationState('exiting');
    }
    prevVisible.current = visible;
  }, [visible]);

  React.useEffect(() => {
    if (animationState === 'exiting') {
      Animated.timing(animateValue, {
        toValue: 0,
        duration: exitDuration,
        useNativeDriver: true,
        ...transition,
      }).start(() => {
        onTransitionComplete && onTransitionComplete('exited');
        setAnimationState('exited');
      });
    }
  }, [
    transition,
    onTransitionComplete,
    setAnimationState,
    animationState,
    exitDuration,
    animateValue,
  ]);

  if (!visible && animationState === 'exited') {
    return null;
  }

  // If exit animation is present and state is exiting, we replace from with exit animation
  from =
    animationState === 'exiting' && exit
      ? { ...defaultStyles, ...exit }
      : { ...defaultStyles, ...from };

  entry = { ...defaultStyles, ...entry };

  return (
    <Animated.View
      pointerEvents="box-none"
      // https://github.com/facebook/react-native/issues/23090#issuecomment-710803743
      needsOffscreenAlphaCompositing
      style={[getAnimatedStyles(animateValue)(from, entry), style]}
    >
      {children}
    </Animated.View>
  );
};
