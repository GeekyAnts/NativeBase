import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks';
import type { ISkeletonProps } from './types';
import Skeleton from './Skeleton';

const SkeletonCircle = ({ children, ...props }: ISkeletonProps) => {
  const resolvedProps = usePropsResolution('SkeletonCircle', props);
  // Skeleton component with border Radius 999
  return resolvedProps.isLoaded ? children : <Skeleton {...resolvedProps} />;
};

export default memo(forwardRef(SkeletonCircle));
