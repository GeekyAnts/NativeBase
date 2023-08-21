import type { ViewProps } from 'react-native';
import type { StyledProps } from '../../../theme/types';
import type {
  ColorType,
  CustomProps,
  PlatformProps,
  ResponsiveValue,
  SafeAreaProps,
} from '../../types';
import type { ITextProps } from './../Text/types';

export interface ILinearGradientProps {
  linearGradient?: LinearGradientProps;
}

export interface InterfaceBoxProps<T = null>
  extends ViewProps,
    SafeAreaProps,
    PlatformProps<T extends null ? IBoxProps<any> : T>,
    Omit<StyledProps, 'bgColor' | 'background' | 'bg' | 'backgroundColor'> {
  /**
   * Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
  // /**
  //  * Applies box shadow and accepts a number from 0 to 9
  //  * @default 0
  //  */
  // shadow?: number;
  /**
   * For providing props to Text inside Box
   */
  _text?: Partial<ITextProps>;
  bg?: ResponsiveValue<ColorType | (string & {}) | ILinearGradientProps>;
  background?: ResponsiveValue<
    ColorType | (string & {}) | ILinearGradientProps
  >;
  bgColor?: ResponsiveValue<ColorType | (string & {}) | ILinearGradientProps>;
  backgroundColor?: ResponsiveValue<
    ColorType | (string & {}) | ILinearGradientProps
  >;
  // gap?: ResponsiveValue<number | string>;
}

export type IBoxProps<T = null> = InterfaceBoxProps<T> & CustomProps<'Box'>;

export type LinearGradientProps = LinearGradientBaseProps &
  (LinearGradientPropsStartEnd | LinearGradientPropsAngle);

export type LinearGradientBaseProps = {
  colors: string[];
  locations?: number[];
};

export type LinearGradientPropsStartEnd = {
  start: Array<number>;
  end: Array<number>;
};

export type LinearGradientPropsAngle = {
  useAngle: boolean;
  angle: number;
  angleCenter: {
    x: number;
    y: number;
  };
};
