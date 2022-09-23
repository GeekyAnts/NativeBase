import type { InterfaceBoxProps } from '../../primitives/Box';
import type { IImageProps } from '../../primitives/Image';
import type { ImageSourcePropType } from 'react-native';
import type { MutableRefObject } from 'react';
import type { CustomProps } from '../../../components/types';
import type { ThemeComponentSizeType } from '../../../components/types/utils';
export interface InterfaceAvatarProps extends InterfaceBoxProps<IAvatarProps> {
  /**
   * The image source of the avatar.
   */
  source?: ImageSourcePropType;
  /**
   * The size of the avatar.
   * @default md
   */
  size?: ThemeComponentSizeType<'Avatar'>;
  /**
   * For providing props to Image component inside the Avatar.
   */
  _image?: Partial<IImageProps>;
  /**
   * ref to be attached to the Avatar wrapper.
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
   * @default -4
   */
  max?: number;
  /**
   * Make Avatar.Group render in vertical direction.
   * @default false
   */
  isVertical?: Boolean;
  /**
   * For providing props to all Avatar in that Avatar.Group
   */
  _avatar?: Partial<IAvatarProps>;
  /**
   * For providing props to the Avatar that shows the count of remaining Avatars that are not visible when max is applied.
   */
  _hiddenAvatarPlaceholder?: Partial<IAvatarProps>;
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
