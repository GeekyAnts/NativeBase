import type { ViewProps, ViewStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import type { ITextProps } from './../Text/types';
import type {
  customBackgroundProps,
  customBorderProps,
  customExtraProps,
  customFlexboxProps,
  customLayoutProps,
  customOutlineProps,
  customPositionProps,
  customShadowProps,
  customTransformProps,
  customTypographyProps,
} from '../../../utils/customProps';

export type IBoxProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  TypographyProps &
  PositionProps &
  customBorderProps &
  customPositionProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customTypographyProps &
  customBackgroundProps &
  customTransformProps &
  customFlexboxProps &
  BorderProps & {
    style?: ViewStyle;
    children?: JSX.Element | JSX.Element[] | string | any;
    shadow?: number;
    _text?: ITextProps;
  };
