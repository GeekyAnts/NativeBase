import React from 'react';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks/useThemeProps';
import { Animated, Platform } from 'react-native';
import type { ISlideFadeProps } from './types';
import { canUseDom } from '../../../utils';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const SlideFade = ({ children, ...props }: ISlideFadeProps, ref?: any) => {
  const isDomUsable = canUseDom();

  const { in: animationState, duration, offsetX, offsetY } = useThemeProps(
    'SlideFade',
    props
  );
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnimX = React.useRef(new Animated.Value(0)).current;
  const slideAnimY = React.useRef(new Animated.Value(0)).current;

  const animIn = () => {
    if (isDomUsable) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
      Animated.timing(slideAnimX, {
        toValue: 0,
        duration: duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
      Animated.timing(slideAnimY, {
        toValue: 0,
        duration: duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
    }
  };
  const animOut = () => {
    if (isDomUsable) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
      offsetX &&
        Animated.timing(slideAnimX, {
          toValue: offsetX,
          duration: duration,
          useNativeDriver: Platform.OS !== 'web',
        }).start();
      offsetY &&
        Animated.timing(slideAnimY, {
          toValue: offsetY,
          duration: duration,
          useNativeDriver: Platform.OS !== 'web',
        }).start();
    }
  };
  animationState ? animIn() : animOut();
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Animated.View
      style={[
        {
          opacity: fadeAnim,
          transform: [{ translateX: slideAnimX, translateY: slideAnimY }],
        },
      ]}
      ref={ref}
    >
      <Box {...props}>{children}</Box>
    </Animated.View>
  );
};

export default React.memo(React.forwardRef(SlideFade));
