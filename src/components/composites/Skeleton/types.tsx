import type { IBoxProps } from '../../primitives';
import type { ITextProps } from '../../primitives';

export type ISkeletonProps = IBoxProps & {
  fadeDuration?: number;
  isLoaded?: boolean;
  speed?: number;
  startColor?: string;
  endColor?: string;
  size?: string | number;
};

export type ISkeletonTextProps = ITextProps &
  IBoxProps & {
    fadeDuration?: number;
    isLoaded?: boolean;
    speed?: number;
    startColor?: string;
    endColor?: string;
    noOfLines?: number;
    space?: number | string;
    _stack?: any;
  };

export type ISkeletonComponentType = ((
  props: ISkeletonProps & { ref?: any }
) => JSX.Element) & {
  Circle: React.MemoExoticComponent<
    (props: ISkeletonProps & { ref?: any }) => JSX.Element
  >;
  Text: React.MemoExoticComponent<
    (props: ISkeletonTextProps & { ref?: any }) => JSX.Element
  >;
};
