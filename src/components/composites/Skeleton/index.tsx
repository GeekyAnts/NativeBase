import React from 'react';
import { Skeleton } from './Skeleton';
import type {
  ISkeletonCircleProps,
  ISkeletonProps,
  ISkeletonTextProps,
} from './types';

// Adding circle prop in normal Skeleton which gives it borderRadius
const SkeletonCircle = React.memo((props: ISkeletonCircleProps) => {
  return <Skeleton circle {...props} />;
});

export default Skeleton;
export { default as SkeletonText } from './SkeletonText';
export { SkeletonCircle };
export type { ISkeletonProps, ISkeletonCircleProps, ISkeletonTextProps };
