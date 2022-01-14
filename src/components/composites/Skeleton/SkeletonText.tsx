import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks';
import { VStack } from '../../primitives/Stack';
import Skeleton from './Skeleton';
import type { ISkeletonTextProps } from './types';

const SkeletonText = (
  //@ts-ignore
  props: ISkeletonTextProps,
  ref: any
) => {
  // const { children, ...props } = allProps;
  const {
    children,
    startColor,
    endColor,
    lines,
    isLoaded,
    _line,
    ...resolvedProps
  } = usePropsResolution('SkeletonText', props);

  const computedChildren = [];
  //generating an array of skeleton components (same length as noOfLines)
  for (let i = 0; i < lines; i++) {
    //check for last line (to change the width of last line)
    if (i === lines - 1 && lines !== 1) {
      computedChildren.push(
        //Using Skeleton component with required props
        <Skeleton
          key={i}
          endColor={endColor}
          startColor={startColor}
          w="75%"
          {..._line}
        />
      );
    } else
      computedChildren.push(
        <Skeleton
          key={i}
          endColor={endColor}
          startColor={startColor}
          {..._line}
        />
      );
  }
  return isLoaded ? (
    children
  ) : (
    <VStack {...resolvedProps} ref={ref}>
      {computedChildren}
    </VStack>
  );
};

export default memo(forwardRef(SkeletonText));
