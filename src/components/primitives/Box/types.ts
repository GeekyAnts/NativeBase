import type { ViewProps } from 'react-native';
import type { IThemeColors } from '../../types/theme';
import type { ResponsiveValue } from '../../types';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  ShadowProps,
  SafeAreaProps,
  PlatformProps,
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
export interface IBoxProps<ThemeType>
  extends ViewProps,
    Omit<
      ColorProps<ThemeType>,
      'bg' | 'bgColor' | 'backgroundColor' | 'fill' | 'stroke'
    >,
    SpaceProps<ThemeType>,
    LayoutProps<ThemeType>,
    PositionProps<ThemeType>,
    BorderProps<ThemeType>,
    ShadowProps<ThemeType>,
    FlexboxProps,
    SafeAreaProps,
    PlatformProps {
  /**
   * Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
  /**
   * For providing props to Text inside Box
   */
  _text?: ITextProps<ThemeType>;

  bg?: ResponsiveValue<IThemeColors<ThemeType> | ILinearGradientProps>;
  background?: ResponsiveValue<IThemeColors<ThemeType> | ILinearGradientProps>;
  bgColor?: ResponsiveValue<IThemeColors<ThemeType> | ILinearGradientProps>;
  backgroundColor?: ResponsiveValue<
    IThemeColors<ThemeType> | ILinearGradientProps
  >;
}
