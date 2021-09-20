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
import type { ResponsiveValue } from '../../../components/types';
import type { ISizes } from '../../../theme/base/sizes';

export interface IInputProps
  extends PlatformProps<IInputProps>,
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
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
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
  type?: 'text' | 'password' | string;
  /**
   * Ref to be passed to Icon's wrapper Box
   */
  wrapperRef?: any;
  // Interaction Props
  /**
   * Passed props will be applied on hovered state.
   */
  _hover?: Omit<IInputProps, '_hover'>;
  /**
   * Passed props will be applied on focused state.
   */
  _focus?: Omit<IInputProps, '_focus'>;
  /**
   * Passed props will be applied on disabled state.
   */
  _disabled?: Omit<IInputProps, '_disabled'>;
  /**
   * Passed props will be applied on readOnly state.
   */
  _readOnly?: Omit<IInputProps, '_readOnly'>;
  /**
   * Passed props will be applied on invalid state.
   */
  _invalid?: Omit<IInputProps, '_hover'>;
  // These porps are currently on hold
  // label?: string;
  // _label?: ITextProps;
}

export interface IInputGroupProps extends IBoxProps<IInputGroupProps> {
  /**
   * The variant of the input style to use.
   * @default <code>outline</code>
   */
  variant?: string;
  /**
   * The size of the input.
   * @default <code>md</code>
   */
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
}
