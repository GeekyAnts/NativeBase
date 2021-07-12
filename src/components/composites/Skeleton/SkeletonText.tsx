import React, { memo, forwardRef } from 'react';
import { Animated, Platform } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { canUseDom } from '../../../utils';
import { VStack } from '../../primitives/Stack';
import Box from '../../primitives/Box';
import Skeleton from './Skeleton';
import type { ISkeletonTextProps } from './types';

const SkeletonText = (allProps: ISkeletonTextProps, ref: any) => {
  const isDomUsable = canUseDom();
  const { children, ...props } = allProps;
  const {
    space,
    lineHeight,
    startColor,
    endColor,
    ...newProps
  } = usePropsResolution('SkeletonText', props);

  const { baseColor } = newProps;
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

  let computedChildren = [];
  for (let i = 0; i < newProps.noOfLines; i++) {
    if (i == newProps.noOfLines - 1 && newProps.noOfLines !== 1) {
      computedChildren.push(
        <Skeleton
          borderRadius={newProps.borderRadius ? newProps.borderRadius : 3}
          endColor={endColor}
          startColor={startColor}
          h={`${lineHeight}` + 'px'}
          w="75%"
        />
      );
    } else
      computedChildren.push(
        <Skeleton
          borderRadius={newProps.borderRadius ? newProps.borderRadius : 3}
          endColor={endColor}
          startColor={startColor}
          h={`${lineHeight}` + 'px'}
        />
      );
  }
  return newProps.isLoaded ? (
    children
  ) : (
    <Box
      borderRadius={newProps.borderRadius ? newProps.borderRadius : 3}
      bg={baseColor}
      {...newProps}
      ref={ref}
    >
      <VStack
        top={0}
        left={0}
        right={0}
        bottom={0}
        position="absolute"
        justifyContent={space == undefined ? 'space-between' : 'flex-start'}
        space={space}
        {...props._stack}
        overflow="hidden"
      >
        {computedChildren}
      </VStack>
      {children ? <Box style={{ opacity: 0 }}>{children}</Box> : null}
    </Box>
  );
};

export default memo(forwardRef(SkeletonText));
