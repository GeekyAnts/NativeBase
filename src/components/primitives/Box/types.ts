import type { ViewProps } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  ExtraProps,
  OutlineProps,
  ShadowProps,
  BackgroundProps,
  SafeAreaProps,
  TransformProps,
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
    ExtraProps,
    OutlineProps,
    ShadowProps,
    BackgroundProps,
    SafeAreaProps,
    TransformProps,
    PlatformProps {
  /**
   * Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
  /**
   * Applies box shadow and accepts a number from 0 to 9
   * @default 0
   */
  shadow?: number;
  /**
   * For providing props to Text inside Box
   */
  _text?: ITextProps;
}
