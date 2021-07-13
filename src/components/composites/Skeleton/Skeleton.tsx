import React, { memo, forwardRef } from 'react';
import { Animated, Platform, View } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { canUseDom } from '../../../utils';
import Box from '../../primitives/Box';
import type { ISkeletonProps } from './types';
import { useToken } from '../../../hooks/useToken';

const Skeleton = (allProps: ISkeletonProps, ref: any) => {
  const isDomUsable = canUseDom();
  const {
    children,
    startColor,
    style,
    endColor,
    ...newProps
  } = usePropsResolution('Skeleton', allProps);
  const blinkAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isDomUsable) {
      const blink = Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: newProps.fadeDuration * 10000 * (1 / newProps.speed),
          useNativeDriver: Platform.OS !== 'web',
        }),
        Animated.timing(blinkAnim, {
          toValue: 0,
          duration: newProps.fadeDuration * 10000 * (1 / newProps.speed),
          useNativeDriver: Platform.OS !== 'web',
        }),
      ]);
      Animated.loop(blink).start();
    }
  }, [blinkAnim, isDomUsable, newProps]);

  const skeletonStyle: any = {
    skeleton: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      height: '100%',
      width: '100%',
      borderRadius: newProps.borderRadius ? newProps.borderRadius : 3,
      backgroundColor: useToken('colors', startColor),
      opacity: blinkAnim, // Bind opacity to animated value
    },
  };

  return newProps.isLoaded ? (
    children
  ) : (
    <Box
      style={[style]}
      borderRadius={newProps.borderRadius ? newProps.borderRadius : 3}
      bg={endColor}
      {...newProps}
      ref={ref}
    >
      <Animated.View style={skeletonStyle.skeleton} />
      {children ? <View style={{ opacity: 0 }}>{children}</View> : null}
    </Box>
  );
};

export default memo(forwardRef(Skeleton));
