import type { PressableProps } from 'react-native';
import type { StyledProps } from '../../../theme/types';
import type { PlatformProps } from '../../types';
export interface IPressableProps<T = IPressableProps<unknown>>
  extends PressableProps,
    StyledProps,
    PlatformProps<T> {
  /**
   * Called when a mouse enters the Pressable
   */
  onHoverIn?: () => void;
  /**
   * Called when a mouse leaves the Pressable
   */
  onHoverOut?: () => void;
  /**
   * Called when Pressable receives focus
   */
  onFocus?: () => void;
  /**
   * Called when Pressable loses focus
   */
  onBlur?: () => void;
  /**
   * Style props to be applied when hovered
   */
  _hover?: Omit<IPressableProps, '_hover'>;
  /**
   * Style props to be applied when pressed
   */
  _pressed?: Omit<IPressableProps, '_pressed'>;
  /**
   * Style props to be applied when focus
   */
  _focus?: Omit<IPressableProps, '_focus'>;

  /**
   * Style props to be applied when disabled
   */
  _disabled?: Omit<IPressableProps, '_disabled'>;

  /**
   * 	If true, the p will be disabled.
   */
  isDisabled?: boolean;

  /**
   * Style props to be applied when focus visible. These styles will be only applied when user is interacting the app using a keyboard. (Web only)
   */
  _focusVisible?: Omit<IPressableProps, '_focusVisible'>;

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
