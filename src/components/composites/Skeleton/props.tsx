import type { IBoxProps } from '../../primitives';

export type ISkeletonProps = IBoxProps & {
  isLoaded?: boolean;
  startColor?: string;
  endColor?: string;
};
export type ISkeletonCircleProps = ISkeletonProps & {
  size?: string | number;
};
export type ISkeletonTextProps = ISkeletonProps & {
  noOfLines?: number;
  lineSize?: number;
};
