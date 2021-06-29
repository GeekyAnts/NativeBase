import type { PressableProps } from 'react-native';
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
  TransformProps,
  PlatformProps,
} from '../../types';
export interface IPressableProps
  extends PressableProps,
    ColorProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
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
   * Called when a mouse enters the Pressable
   */
  onHoverIn?: any;
  /**
   * Called when a mouse leaves the Pressable
   */
  onHoverOut?: any;
  /**
   * Called when Pressable receives focus
   */
  onFocus?: any;
  /**
   * Called when Pressable loses focus
   */
  onBlur?: any;
  /**
   * Style props to be applied when hovered
   */
  _hover?: IPressableProps;
  /**
   * Style props to be applied when pressed
   */
  _pressed?: IPressableProps;
  /**
   * Style props to be applied when focus
   */
  _focus?: IPressableProps;

  /**
   * Style props to be applied when disabled
   */
  _disabled?: IPressableProps;

  /**
   * Style props to be applied when focus visible. These styles will be only applied when user is interacting the app using a keyboard. (Web only)
   */
  _focusVisible?: IPressableProps;

  children?:
    | React.ReactNode
    | (({
        isPressed,
        isHovered,
        isFocused,
      }: {
        isPressed: boolean;
        isHovered: boolean;
        isFocused: boolean;
      }) => any);
}
