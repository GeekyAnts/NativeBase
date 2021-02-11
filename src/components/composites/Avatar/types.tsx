import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  PositionProps,
} from 'styled-system';
import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
  customTransformProps,
  customFlexboxProps,
  customPositionProps,
} from '../../../utils/customProps';
import type { ITextProps } from '../../primitives/Text';
import type { ImageSourcePropType } from 'react-native';

export type IAvatarProps = ColorProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  customPositionProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  customTransformProps &
  customFlexboxProps &
  BorderProps &
  SpaceProps &
  customBorderProps &
  BorderProps &
  FlexboxProps & {
    name?: string | undefined;
    _name?: ITextProps;
    style?: any;
    size?: string | undefined;
    source?: ImageSourcePropType;
    children?: JSX.Element[] | JSX.Element | any | undefined;
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

export type IAvatarComponentType = ((props: IAvatarProps) => JSX.Element) & {
  Group: React.MemoExoticComponent<(props: IAvatarGroupProps) => JSX.Element>;
  Badge: React.MemoExoticComponent<(props: IAvatarBadgeProps) => JSX.Element>;
};
