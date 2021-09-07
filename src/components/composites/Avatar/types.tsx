import type { IBoxProps } from '../../primitives/Box';
import type { ImageSourcePropType } from 'react-native';
import type { MutableRefObject } from 'react';

export interface IAvatarProps extends IBoxProps {
  /**
   * The image source of the avatar.
   */
  source?: ImageSourcePropType;
  /**
   * The size of the avatar
   * @default md
   */
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | string | number;
  /**
   * ref to be attached to Avatar wrapper
   */
  wrapperRef?: any;
}

export interface IAvatarBadgeProps extends IBoxProps {}

export interface IAvatarGroupProps extends IAvatarProps {
  /**
   * Avatar children
   */
  children?: JSX.Element[] | JSX.Element;
  /**
   * The distance each avatar.
   */
  space?: number;
  /**
   * The max number of avatar.
   */
  max?: number;
}

export type IAvatarComponentType = ((
  props: IAvatarProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Group: React.MemoExoticComponent<
    (props: IAvatarGroupProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Badge: React.MemoExoticComponent<
    (props: IAvatarBadgeProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};
