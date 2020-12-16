import React from 'react';
import type {
  ISkeletonProps,
  ISkeletonCircleProps,
  ISkeletonTextProps,
} from './props';
import { Skeleton } from './Skeleton';

// Adding circle prop in normal Skeleton which gives it borderRadius
const SkeletonCircle = (props: ISkeletonCircleProps) => {
  return <Skeleton circle {...props} />;
};

export default Skeleton;
export { SkeletonCircle };
export { default as SkeletonText } from './SkeletonText';
export type { ISkeletonProps, ISkeletonCircleProps, ISkeletonTextProps };
