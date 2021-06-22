import type { IBoxProps } from '../../primitives';

export type ISkeletonProps = IBoxProps & {
  startColor?: string;
  endColor?: string;
  size?: string | number;
  variant?: 'rect' | 'circle' | 'text';
};
