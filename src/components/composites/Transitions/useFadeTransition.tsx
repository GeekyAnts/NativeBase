import React from 'react';
import { Animated, Platform } from 'react-native';
import { canUseDom } from '../../../utils';

export const useFadeTransition = (
  duration = 500,
  initValue = 0,
  finalValue = 1
) => {
  const isDomUsable = canUseDom();
  const fadeValue = React.useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    if (isDomUsable) {
      Animated.timing(fadeValue, {
        toValue: finalValue,
        duration: duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
    }
  };

  const fadeOut = () => {
    if (isDomUsable) {
      Animated.timing(fadeValue, {
        toValue: initValue,
        duration: duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
    }
  };

  return {
    fadeValue,
    fadeIn,
    fadeOut,
  };
};
