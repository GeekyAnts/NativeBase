import type { ISkeletonComponentType } from './types';
import SkeletonMain from './Skeleton';
import SkeletonText from './SkeletonText';

const SkeletonTemp: any = SkeletonMain;
SkeletonTemp.Text = SkeletonText;

// To add typings
const Skeleton = SkeletonTemp as ISkeletonComponentType;
export { Skeleton };
export type { ISkeletonProps, ISkeletonTextProps } from './types';
