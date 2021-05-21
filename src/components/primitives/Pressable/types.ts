import type { PressableProps } from 'react-native';
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
export interface IPressableProps
  extends PressableProps,
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
   *
   */
  onHoverIn?: any;
  /**
   *
   */
  onHoverOut?: any;
  /**
   *
   */
  onFocus?: any;
  /**
   *
   */
  onBlur?: any;
  /**
   *
   */
  _hover?: IPressableProps;
  /**
   *
   */
  _pressed?: IPressableProps;
  /**
   *
   */
  _focus?: IPressableProps;
  /**
   *
   */
  children?: any;
}
