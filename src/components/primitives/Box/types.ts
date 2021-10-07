import type { ViewProps } from 'react-native';
import type { StyledProps } from '../../../theme/types';
import type { IColors } from '../../../theme/base/colors';
import type {
  SafeAreaProps,
  PlatformProps,
  ResponsiveValue,
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

export interface IBoxProps<T = null>
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
  _text?: ITextProps;
  bg?: ResponsiveValue<IColors | (string & {}) | ILinearGradientProps>;
  background?: ResponsiveValue<IColors | (string & {}) | ILinearGradientProps>;
  bgColor?: ResponsiveValue<IColors | (string & {}) | ILinearGradientProps>;
  backgroundColor?: ResponsiveValue<
    IColors | (string & {}) | ILinearGradientProps
  >;
}
