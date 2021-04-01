import type { ITextProps } from '../../primitives/Text';
import type { IBoxProps } from '../../primitives/Box';
import type { ImageSourcePropType } from 'react-native';

export type IAvatarProps = IBoxProps & {
  _text?: ITextProps;
  style?: any;
  size?: string | undefined;
  source?: ImageSourcePropType;
  children?: JSX.Element[] | JSX.Element | any | undefined | string;
};

export type IAvatarBadgeProps = IAvatarProps & {
  bg?: string;
  boxSize?: number;
  borderColor?: string;
};

export type IAvatarGroupProps = IAvatarProps & {
  children?: JSX.Element[] | JSX.Element;
  spacing?: number;
  max?: number;
};

export type IAvatarComponentType = ((
  props: IAvatarProps & { ref?: any }
) => JSX.Element) & {
  Group: React.MemoExoticComponent<
    (props: IAvatarGroupProps & { ref?: any }) => JSX.Element
  >;
  Badge: React.MemoExoticComponent<
    (props: IAvatarBadgeProps & { ref?: any }) => JSX.Element
  >;
};
