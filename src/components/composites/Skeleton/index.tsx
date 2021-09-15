import type { ISkeletonComponentType } from './types';
import SkeletonMain from './Skeleton';
import SkeletonCircle from './SkeletonCircle';
import SkeletonText from './SkeletonText';

const SkeletonTemp: any = SkeletonMain;
SkeletonTemp.Circle = SkeletonCircle;
SkeletonTemp.Text = SkeletonText;

// To add typings
const Skeleton = SkeletonTemp as ISkeletonComponentType;
export { Skeleton };
export type { ISkeletonProps, ISkeletonTextProps } from './types';
