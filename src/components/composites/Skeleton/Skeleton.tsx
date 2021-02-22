import React from 'react';
import { Animated, Platform, View } from 'react-native';
import { useThemeProps } from '../../../hooks';
import { canUseDom } from '../../../utils';
import Box from '../../primitives/Box';
import type { ISkeletonProps } from './types';

const Skeleton = (allProps: ISkeletonProps, ref: any) => {
  const isDomUsable = canUseDom();
  const { variant, children, ...props } = allProps;
  const newProps = useThemeProps('Skeleton', props);
  const { style, skeletonColor, baseColor } = newProps;
  const blinkAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isDomUsable) {
      const blink = Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: Platform.OS !== 'web',
        }),
        Animated.timing(blinkAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: Platform.OS !== 'web',
        }),
      ]);
      Animated.loop(blink).start();
    }
  }, [blinkAnim, isDomUsable]);

  const skeletonStyle: any = {
    skeleton: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      height: '100%',
      width: '100%',
      borderRadius: variant === 'circle' ? 999 : 3,
      backgroundColor: skeletonColor,
      opacity: blinkAnim, // Bind opacity to animated value
    },
  };

  return (
    <Box
      style={[
        style,
        {
          transform:
            props.transform ?? variant === 'text'
              ? [{ scaleY: 0.6 }]
              : undefined,
        },
      ]}
      borderRadius={variant === 'circle' ? 999 : 3}
      bg={baseColor}
      {...props}
      ref={ref}
    >
      <Animated.View style={skeletonStyle.skeleton} />
      {children ? <View style={{ opacity: 0 }}>{children}</View> : null}
    </Box>
  );
};

export default React.memo(React.forwardRef(Skeleton));
