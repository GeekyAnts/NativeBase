import React from 'react';
import Box from '../../primitives/Box';
import { usePropsConfig } from '../../../hooks/usePropsConfig';
import { Animated, Platform } from 'react-native';
import type { IFadeProps } from './props';

export const useFadeAnimation = (
  duration = 500,
  initValue = 0,
  finalValue = 1
) => {
  const fadeValue = React.useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeValue, {
      toValue: finalValue,
      duration: duration,
      useNativeDriver: Platform.OS !== 'web',
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeValue, {
      toValue: initValue,
      duration: duration,
      useNativeDriver: Platform.OS !== 'web',
    }).start();
  };

  return {
    fadeValue,
    fadeIn,
    fadeOut,
  };
};

const Fade = ({ children, ...props }: IFadeProps) => {
  const { in: animationState, duration } = usePropsConfig('Fade', props);
  const { fadeValue, fadeIn, fadeOut } = useFadeAnimation(duration);

  animationState ? fadeIn() : fadeOut();
  return (
    <Animated.View style={{ opacity: fadeValue }}>
      <Box {...props} />
      {children}
    </Animated.View>
  );
};

export default Fade;
