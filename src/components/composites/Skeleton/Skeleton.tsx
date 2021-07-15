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
  // Setting blink Animation
  const blinkAnim = React.useRef(new Animated.Value(0)).current;
  const tokenisedRadius = useToken('radii', newProps.borderRadius);
  const tokenisedStartColor = useToken('colors', startColor);

  // Generating blink animation in a sequence
  React.useEffect(() => {
    //Check if window is loaded
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
      borderRadius: tokenisedRadius,
      backgroundColor: tokenisedStartColor,
      opacity: blinkAnim, // Bind opacity to animated value
    },
  };

  return newProps.isLoaded ? (
    children
  ) : (
    <Box
      style={[style]}
      borderRadius={tokenisedRadius}
      bg={endColor}
      {...newProps}
      ref={ref}
    >
      <Animated.View style={skeletonStyle.skeleton} />
      {/* Rendering children with 0 opacity (takes height of children incase children are present) */}
      {children ? <View style={{ opacity: 0 }}>{children}</View> : null}
    </Box>
  );
};

export default memo(forwardRef(Skeleton));
