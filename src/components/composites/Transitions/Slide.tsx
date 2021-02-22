import React from 'react';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks/useThemeProps';
import { Animated, Platform } from 'react-native';
import type { ISlideProps } from './types';
import { canUseDom } from '../../../utils';

const Slide = ({ children, ...props }: ISlideProps, ref: any) => {
  const isDomUsable = canUseDom();
  // TODO: Slide from right and left needs implmentation.
  const {
    in: animationState,
    delay,
    placement: pPlacement,
    duration,
  } = useThemeProps('Slide', props);
  let placement = pPlacement === 'top' ? 'top' : 'bottom';
  const [containerOpacity, setContainerOpacity] = React.useState(1);
  const [size, setSize] = React.useState(placement === 'top' ? -1000 : 1000);
  const provideSize = (layoutSize: any) => {
    if (placement === 'right' || placement === 'left')
      setSize(layoutSize.width);
    else setSize(layoutSize.height);
    setTimeout(() => {
      setContainerOpacity(1);
    }, duration);
  };
  const slideAnim = React.useRef(new Animated.Value(size)).current;
  const slideIn = () => {
    if (isDomUsable) {
      Animated.timing(slideAnim, {
        delay,
        toValue: 0,
        duration: duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
    }
  };

  const slideOut = () => {
    if (isDomUsable) {
      Animated.timing(slideAnim, {
        toValue: placement === 'top' ? -size : size,
        duration: duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
    }
  };

  const holderStyle: any = {
    top: {
      top: 0,
      right: 0,
      left: 0,
    },
    right: {
      right: 0,
      top: 0,
      bottom: 0,
    },
    bottom: {
      bottom: 0,
      right: 0,
      left: 0,
    },
    left: {
      left: 0,
      bottom: 0,
      top: 0,
    },
  };
  const animatioStyle: any = {
    top: { transform: [{ translateY: slideAnim }] },
    right: { transform: [{ translateX: slideAnim }] },
    bottom: { transform: [{ translateY: slideAnim }] },
    left: { transform: [{ translateX: slideAnim }] },
  };

  animationState && size ? slideIn() : slideOut();
  return (
    <Box
      overflow="hidden"
      position="absolute"
      style={holderStyle[placement]}
      opacity={containerOpacity}
    >
      <Animated.View style={animatioStyle[placement]}>
        <Box
          {...props}
          onLayout={(e) => provideSize(e.nativeEvent.layout)}
          ref={ref}
        >
          {children}
        </Box>
      </Animated.View>
    </Box>
  );
};

export default React.memo(React.forwardRef(Slide));
