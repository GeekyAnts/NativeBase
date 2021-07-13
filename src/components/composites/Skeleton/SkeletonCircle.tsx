import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks';
import type { ISkeletonProps } from './types';
import Skeleton from './Skeleton';

const SkeletonCircle = (allProps: ISkeletonProps) => {
  const { children, ...props } = allProps;
  const newProps = usePropsResolution('Skeleton', props);

  return newProps.isLoaded ? (
    children
  ) : (
    <Skeleton borderRadius={999} {...newProps} />
  );
};

export default memo(forwardRef(SkeletonCircle));
