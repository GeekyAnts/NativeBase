import type { MutableRefObject } from 'react';
import type { ImageSourcePropType } from 'react-native';
import type { ResponsiveValue } from '../../../components/types';
import type { ISizes } from '../../../theme/base/sizes';
import type { IBoxProps } from '../../primitives/Box';
import type { IImageProps } from '../../primitives/Image';

export interface IAvatarProps extends IBoxProps<IAvatarProps> {

  /**
   * The image source of the avatar.
   */
  source?: ImageSourcePropType;
  /**
   * The size of the avatar
   * @default md
   */
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
  /**
   * Props to be passed to Image
   */
  _image?: IImageProps;
  /**
   * ref to be attached to Avatar wrapper
   */
  wrapperRef?: MutableRefObject<any>;
}

export interface IAvatarBadgeProps extends IBoxProps<IAvatarBadgeProps> { }

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
