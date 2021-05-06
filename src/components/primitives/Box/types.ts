import type { ViewProps, ViewStyle } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  PlatformProps,
} from '../../types';
import type { ITextProps } from './../Text/types';

export interface IBoxProps
  extends ViewProps,
    ColorProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    TypographyProps,
    PositionProps,
    BorderProps,
    PlatformProps {
  style?: ViewStyle;
  children?: JSX.Element | JSX.Element[] | string | any;
  shadow?: number;
  _text?: ITextProps;
}
