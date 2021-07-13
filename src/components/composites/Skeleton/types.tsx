import type { IBoxProps } from '../../primitives';

export interface ISkeletonProps extends IBoxProps {
  /**
   * The fadeIn duration in seconds
   */
  fadeDuration?: number;
  /**
   * If true, it'll render its children
   */
  isLoaded?: boolean;
  /**
   * The animation speed in seconds
   */
  speed?: number;
  /**
   * The color at the animation start
   */
  startColor?: string;
  /**
   * The color at the animation end
   */
  endColor?: string;
  /**
   * Sizes for Skeleton
   */
  size?: string | number;
}

export interface ISkeletonTextProps extends IBoxProps {
  /**
   * The fadeIn duration in seconds
   */
  fadeDuration?: number;
  /**
   * If true, it'll render its children
   */
  isLoaded?: boolean;
  /**
   * The animation speed in seconds
   */
  speed?: number;
  /**
   * The color at the animation start
   */
  startColor?: string;
  /**
   * The color at the animation end
   */
  endColor?: string;
  /**
   * No of Lines in text
   */
  noOfLines?: number;
  /**
   * Space between two lines
   */
  space?: number | string;
  /**
   * VStack props
   */
  _stack?: any;
}

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
