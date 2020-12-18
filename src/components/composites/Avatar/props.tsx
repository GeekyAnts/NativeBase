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
} from '../../../utils/customProps';
import type { ImageSourcePropType } from 'react-native';

export type IAvatarProps = ColorProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
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
    style?: any;
    size?: string | undefined;
    source?: ImageSourcePropType;
  };

export type IAvatarBadgeProps = IAvatarProps & {
  bg?: string;
  boxSize?: number;
  borderColor?: string;
};
