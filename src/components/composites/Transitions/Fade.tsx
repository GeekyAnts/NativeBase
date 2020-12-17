import React from 'react';
import { Animated } from 'react-native';
import { usePropsConfig } from '../../../hooks/usePropsConfig';
import type { IFadeProps } from './props';
import { useFadeTransition } from './useFadeTransition';
import Box from '../../primitives/Box';

const Fade = ({ children, ...props }: IFadeProps) => {
  const { in: animationState, duration } = usePropsConfig('Fade', props);
  const { fadeValue, fadeIn, fadeOut } = useFadeTransition(duration);
  animationState ? fadeIn() : fadeOut();
  return (
    <Animated.View style={{ opacity: fadeValue }}>
      <Box {...props} />
      {children}
    </Animated.View>
  );
};

export default Fade;
