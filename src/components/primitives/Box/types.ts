import type { ViewProps } from 'react-native';
import type { IThemeColors } from '../../../theme/base/colors';

import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  ExtraProps,
  OutlineProps,
  ShadowProps,
  BackgroundProps,
  SafeAreaProps,
  PlatformProps,
  TransformProps,
} from '../../types';
import type { ITextProps } from './../Text/types';

export interface ILinearGradientProps {
  linearGradient?: {
    colors: Array<string>;
    start?: Array<number>;
    end?: Array<number>;
    location?: Array<number>;
  };
}
export interface IBoxProps<Theme>
  extends ViewProps,
    Omit<ColorProps, 'backgroundColor' | 'bg' | 'color' | 'fill' | 'stroke'>,
    SpaceProps<Theme>,
    LayoutProps<Theme>,
    FlexboxProps,
    PositionProps,
    BorderProps,
    ExtraProps,
    OutlineProps,
    ShadowProps,
    Omit<BackgroundProps, 'bgColor' | 'background' | 'bg' | 'backgroundColor'>,
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
  bg?: IThemeColors | ILinearGradientProps;
  background?: IThemeColors | ILinearGradientProps;
  bgColor?: IThemeColors | ILinearGradientProps;
  backgroundColor?: IThemeColors | ILinearGradientProps;
}
