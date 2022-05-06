import type { PlatformProps } from '../../types';
import type { StyledProps } from '../../../theme/types';
import type { ResponsiveValue } from '../../types/responsiveValue';
import type { SvgProps } from 'react-native-svg';
import type { IColors } from '../../../theme/base/colors';

import type { CustomProps, ThemeComponentSizeType } from '../../types/utils';

export interface InterfaceIconProps
  extends Omit<
      SvgProps,
      'opacity' | 'stroke' | 'height' | 'width' | 'transform' | 'color'
    >,
    StyledProps,
    PlatformProps<IIconProps> {
  // name?: IconNameType;
  // type?: IconType;
  /**
   * Use <a href='https://github.com/expo/vector-icons'>@expo/vector-icons</a>
   */
  as?: any;
  /**
   * The viewBox of the icon.
   */
  // viewBox?: string;
  /**
   * The size of the icon.
   */
  size?: ThemeComponentSizeType<'Icon'>;

  /**
   * The color of the icon.
   */
  // color?: string;
  color?: ResponsiveValue<IColors | (string & {})>;
  /**
   *
   */
  // focusable?: boolean;
  /**
   *
   */
  children?: JSX.Element[] | JSX.Element;
  /**
   *
   */
  name?: string;
  /**
   *
   */
  // stroke?: string;
  /**
   *
   */
  // strokeWidth?: string;
}

export interface IcreateIconProps {
  /**
   * The viewBox of the icon.
   */
  viewBox?: string;
  /**
   * Path element of the icon.
   */
  path?: JSX.Element[] | JSX.Element;
  /**
   * The path of the SVG icon.
   */
  d?: string;
}

export type IIconProps = InterfaceIconProps & CustomProps<'Icon'>;
