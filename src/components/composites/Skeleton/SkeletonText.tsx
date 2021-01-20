import React from 'react';
import { Box, Stack } from '../../primitives';
import { Skeleton } from './Skeleton';
import { useThemeProps } from '../../../hooks';
import type { ISkeletonTextProps } from './props';

const NBSkeletonText = ({ ...props }: ISkeletonTextProps) => {
  const newProps = useThemeProps('SkeletonText', props);
  const { skeletonColor, lineSize, baseColor, noOfLines } = newProps;
  const para = [];
  for (let i = 0; i < noOfLines; i++) {
    para.push(
      <Skeleton
        width={i === noOfLines - 1 ? '70%' : '100%'}
        height={lineSize}
        startColor={skeletonColor}
        endColor={baseColor}
      />
    );
  }
  return (
    <Stack space={3} width="80%" {...newProps}>
      {para}
    </Stack>
  );
};

const SkeletonText = ({ children, isLoaded, ...props }: ISkeletonTextProps) => {
  if (isLoaded) return <Box {...props}>{children}</Box>;

  return <NBSkeletonText {...props} />;
};

export default React.memo(SkeletonText);
