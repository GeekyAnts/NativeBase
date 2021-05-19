import type { TextInputProps } from 'react-native';
import type {
  ColorProps,
  SpaceProps,
  FlexboxProps,
  BorderProps,
  ExtraProps,
  OutlineProps,
  ShadowProps,
  LayoutProps,
  BackgroundProps,
  PlatformProps,
  TypographyProps,
} from '../../types';
import type { IBoxProps } from '../Box';

export interface IInputProps
  extends PlatformProps,
    ColorProps,
    Omit<TextInputProps, 'textAlign'>,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    TypographyProps,
    BorderProps,
    ExtraProps,
    OutlineProps,
    ShadowProps,
    LayoutProps,
    TypographyProps,
    BackgroundProps,
    BorderProps {
  /**
   * If true, the input will indicate an error.
   */
  isInvalid?: boolean;
  /**
   * The variant of the input style to use.
   * @default <code>outline</code>
   */
  variant?: 'outline' | 'filled' | 'underlined' | 'unstyled' | 'rounded';
  /**
   * 	If true, the input will be disabled.
   */
  isDisabled?: boolean;
  /**
   * The size of the input.
   * @default <code>md</code>
   */
  size?: string;
  /**
   *
   */
  isRequired?: boolean;
  /**
   * If true, prevents the value of the input from being edited.
   */
  isReadOnly?: boolean;
  /**
   * If true, the input element will span the full width of its parent
   */
  isFullWidth?: boolean;
  /**
   * If given, adds the provided element to the left of the input.
   */
  InputLeftElement?: JSX.Element | JSX.Element[];
  /**
   * If given, adds the provided element to the right of the input.
   */
  InputRightElement?: JSX.Element | JSX.Element[];
  /**
   * Using the type password, user can mask the input.
   */
  type?: 'text' | 'password' | string;
  /**
   * Ref to be passed to Icon's wrapper Box
   */
  wrapperRef?: any;
  // Interaction Props
  /**
   * Passed props will be applied on hovered state.
   */

  _hover?: IInputProps;
  /**
   * Passed props will be applied on focused state.
   */
  _focus?: IInputProps;
  /**
   * Passed props will be applied on disabled state.
   */
  _disabled?: IInputProps;
  /**
   * Passed props will be applied on invalid state.
   */
  _invalid?: IInputProps;
  // These porps are currently on hold
  // label?: string;
  // _label?: ITextProps;
}

export interface IInputGroupProps extends IBoxProps {
  /**
   * The variant of the input style to use.
   * @default <code>outline</code>
   */
  variant?: string;
  /**
   * The size of the input.
   * @default <code>md</code>
   */
  size?: string;
}
