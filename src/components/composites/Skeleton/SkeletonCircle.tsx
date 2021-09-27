import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks';
import type { ISkeletonProps } from './types';
import Skeleton from './Skeleton';

const SkeletonCircle = ({ children, ...props }: ISkeletonProps, ref: any) => {
  const resolvedProps = usePropsResolution('SkeletonCircle', props);
  // Skeleton component with border Radius 999
  return resolvedProps.isLoaded ? children : <Skeleton {...resolvedProps} ref={ref} />;
};

export default memo(forwardRef(SkeletonCircle));
