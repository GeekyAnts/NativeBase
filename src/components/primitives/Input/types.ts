import type { TextInputProps } from 'react-native';
import type { StyledProps } from '../../../theme/types';
import type {
  PlatformProps,
  ThemeComponentSizeType,
  VariantType,
} from '../../types';
import type { InterfaceBoxProps } from '../Box';
import type { ResponsiveValue, ColorType } from '../../../components/types';
import type { ISizes } from '../../../theme/base/sizes';
import type { CustomProps } from '../../types';
import type { IStackProps } from '../Stack/Stack';
import type { MutableRefObject } from 'react';

export interface InterfaceInputProps
  extends PlatformProps<IInputProps>,
    Omit<TextInputProps, 'textAlign'>,
    StyledProps {
  /**
   * If true, the input will indicate an error.
   */
  isInvalid?: boolean;
  /**
   * The variant of the input style to use.
   * @default 'outline'
   */
  variant?: VariantType<'Input'>;
  /**
   * 	If true, the input will be disabled.
   */
  isDisabled?: boolean;
  /**
   * 	If true, the input will be hovered.
   */
  isHovered?: boolean;
  /**
   * 	If true, the input will be focused.
   */
  isFocused?: boolean;
  /**
   * The size of the input.
   * @default 'md'
   */
  size?: ThemeComponentSizeType<'Input'>; // ResponsiveValue<ISizes | (string & {}) | number>;
  /**
   * This will set aria-required="true" on web when passed in formcontrol.
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
   * If given, adds the provided element to the left of the input.
   */
  leftElement?: JSX.Element | JSX.Element[];
  /**
   * If given, adds the provided element to the right of the input.
   */
  InputRightElement?: JSX.Element | JSX.Element[];
  /**
   * If given, adds the provided element to the right of the input.
   */
  rightElement?: JSX.Element | JSX.Element[];
  /**
   * Using the type password, user can mask the input.
   */
  type?: 'text' | 'password';
  /**
   * Ref to be passed to Icon's wrapper Box
   */
  wrapperRef?: any;
  // Interaction Props
  /**
   * Passed props will be applied on hovered state.
   */
  _hover?: Partial<IInputProps>;
  /**
   * Passed props will be applied on focused state.
   */
  _focus?: Partial<IInputProps>;
  /**
   * Passed props will be applied on disabled state.
   */
  _disabled?: Partial<IInputProps>;
  /**
   * Passed props will be applied on readOnly state.
   */
  _readOnly?: Partial<IInputProps>;
  /**
   * Passed props will be applied on invalid state.
   */
  _invalid?: Partial<IInputProps>;
  /**
   * props are passed to InputBase component
   */
  _input?: Partial<IInputProps>;
  /**
   * Props to be passed to the Stack used inside.
   */
  _stack?: Partial<IStackProps>;
  /** This prop allow you to change outlineColor when input is in focused state*/
  focusOutlineColor?: ColorType;
  /** This prop allow you to change outlineColor when input is in focused state*/
  inValidOutlineColor?: ColorType;
  ref?: MutableRefObject<any>;
}

export interface IInputGroupProps extends InterfaceBoxProps<IInputGroupProps> {
  /**
   * The variant of the input style to use.
   * @default 'outline'
   */
  variant?: string;
  /**
   * The size of the input.
   * @default 'md'
   */
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
}

export type IInputComponentType = (props: IInputProps) => JSX.Element;

export type IInputProps = InterfaceInputProps & CustomProps<'Input'>;
