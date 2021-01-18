import React from 'react';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks/useThemeProps';
import { Animated, Platform } from 'react-native';
import type { IScaleFadeProps } from './props';
import { canUseDom } from '../../../utils';

const ScaleFade = ({ children, ...props }: IScaleFadeProps) => {
  const isDomUsable = canUseDom();
  const { in: animationState, duration, initialScale } = useThemeProps(
    'ScaleFade',
    props
  );
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(initialScale)).current;

  const fadeIn = () => {
    if (isDomUsable) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
    }
  };
  const fadeOut = () => {
    if (isDomUsable) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
    }
  };
  const scaleIn = () => {
    if (isDomUsable) {
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
    }
  };
  const scaleOut = () => {
    if (isDomUsable) {
      Animated.timing(scaleAnim, {
        toValue: initialScale,
        duration: duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
    }
  };

  if (animationState) {
    fadeIn();
    scaleIn();
  } else {
    fadeOut();
    scaleOut();
  }
  return (
    <Animated.View
      style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}
    >
      <Box {...props} />
      {children}
    </Animated.View>
  );
};

export default ScaleFade;
