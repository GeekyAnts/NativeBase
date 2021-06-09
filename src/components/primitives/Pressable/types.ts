import type { PressableProps } from 'react-native';
import type { ITheme } from '../../../theme/base';
import type {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  ShadowProps,
  BackgroundColorProps,
  PlatformProps,
  OpacityProps,
  RequiredTheme,
} from '../../types/theme';
export interface IPressableProps<T extends ITheme = RequiredTheme>
  extends PressableProps,
    OpacityProps<T>,
    SpaceProps<T>,
    LayoutProps<T>,
    PositionProps<T>,
    BorderProps<T>,
    ShadowProps<T>,
    BackgroundColorProps<T>,
    FlexboxProps,
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
  _hover?: any;
  /**
   * Style props to be applied when pressed
   */
  _pressed?: any;
  /**
   * Style props to be applied when focus
   */
  _focus?: any;

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
