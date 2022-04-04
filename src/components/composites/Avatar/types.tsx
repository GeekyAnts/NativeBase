import type { InterfaceBoxProps } from '../../primitives/Box';
import type { ImageSourcePropType } from 'react-native';
import type { MutableRefObject } from 'react';
import type { CustomProps, ResponsiveValue } from '../../../components/types';
import type { ISizes } from '../../../theme/base/sizes';

export interface InterfaceAvatarProps extends InterfaceBoxProps<IAvatarProps> {
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
   * ref to be attached to Avatar wrapper
   */
  wrapperRef?: MutableRefObject<any>;
}

export interface IAvatarBadgeProps
  extends InterfaceBoxProps<IAvatarBadgeProps> {}

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

export type IAvatarProps = InterfaceAvatarProps & CustomProps<'Avatar'>;
