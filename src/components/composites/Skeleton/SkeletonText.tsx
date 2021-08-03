import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks';
import { VStack } from '../../primitives/Stack';
import Box, { IBoxProps } from '../../primitives/Box';
import Skeleton from './Skeleton';
import type { ISkeletonTextProps } from './types';

const SkeletonText = (allProps: IBoxProps & ISkeletonTextProps, ref: any) => {
  const { children, ...props } = allProps;
  const {
    space,
    lineHeight,
    startColor,
    endColor,
    ...newProps
  } = usePropsResolution('SkeletonText', props);

  let computedChildren = [];
  //generating an array of skeleton components (same length as noOfLines)
  for (let i = 0; i < newProps.noOfLines; i++) {
    //check for last line (to change the width of last line)
    if (i == newProps.noOfLines - 1 && newProps.noOfLines !== 1) {
      computedChildren.push(
        //Using Skeleton component with required props
        <Skeleton
          borderRadius={newProps.borderRadius ? newProps.borderRadius : 3}
          endColor={endColor}
          startColor={startColor}
          h={lineHeight}
          w="75%"
        />
      );
    } else
      computedChildren.push(
        <Skeleton
          borderRadius={newProps.borderRadius ? newProps.borderRadius : 3}
          endColor={endColor}
          startColor={startColor}
          h={lineHeight}
        />
      );
  }
  return newProps.isLoaded ? (
    children
  ) : (
    <Box
      borderRadius={newProps.borderRadius ? newProps.borderRadius : 3}
      bg={'transparent'}
      {...newProps}
      ref={ref}
    >
      {/* populating computed children with given space */}
      <VStack
        top={0}
        left={0}
        right={0}
        bottom={0}
        position="absolute"
        justifyContent={space == undefined ? 'space-between' : 'flex-start'}
        space={space}
        // spreading props specific for VStack
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
