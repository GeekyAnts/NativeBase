import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  ShadowProps,
  BackgroundColorProps,
  SafeAreaProps,
  PlatformProps,
} from '../../types';
import type { SvgProps } from 'react-native-svg';

export interface IIconProps
  extends Omit<
      SvgProps,
      'opacity' | 'height' | 'width' | 'transform' | 'color'
    >,
    BorderProps,
    ColorProps,
    FlexboxProps,
    Omit<LayoutProps, 'size'>,
    PositionProps,
    SpaceProps,
    TypographyProps,
    ShadowProps,
    BackgroundColorProps,
    SafeAreaProps,
    PlatformProps {
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
  size?: string | number;
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
