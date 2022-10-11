import type { IStackProps } from '../../primitives/Stack';
import type { InterfaceBoxProps } from '../../primitives/Box/types';
import type { IFormControlContext } from '../../composites';
import type { AccessibilityRole } from 'react-native';
import type { RadioGroupState } from '@react-stately/radio';
import type { MutableRefObject } from 'react';
import type { ResponsiveValue } from '../../../components/types';
import type { ISizes } from '../../../theme/base/sizes';
export type IRadioValue = string;
import type { CustomProps, ThemeComponentSizeType } from '../../types';
import type { IIconProps } from '../Icon';
import type { ColorSchemeType } from '../../../components/types';

export type IRadioGroupOnChangeHandler = (value: IRadioValue) => any;

export interface InterfaceRadioProps extends InterfaceBoxProps<IRadioProps> {
  /**
   * The value to be used in the radio input. This is the value that will be returned on form submission
   */
  value: IRadioValue;
  /**
   * The color of the radio. This should be one of the color keys in the theme (e.g."green", "red").
   * @default 'primary'
   */
  colorScheme?: ColorSchemeType & ResponsiveValue<'default'>;
  /**
   * 	If true, the radio will be disabled
   */
  isDisabled?: boolean;
  /**
   * 	If true, the radio will be hovered
   */
  isHovered?: boolean;
  /**
   * 	If true, the radio will be pressed
   */
  isPressed?: boolean;
  /**
   * 	If true, the radio will be focused
   */
  isFocused?: boolean;
  /**
   * 	If true, the radio focus ring will be visible
   */
  isFocusVisible?: boolean;
  /**
   * If true, the radio is marked as invalid. Changes style of unchecked state.
   */
  isInvalid?: boolean;
  /**
   * 	The size (width and height) of the radio.
   */

  size?: ThemeComponentSizeType<'Radio'>;

  /**
   * If given, will use this icon instead of the default.
   */
  icon?: JSX.Element;
  /**
   * Ref to be passed to Icon's wrapper Box
   */
  wrapperRef?: any;
  /**
   * Props to be passed to the Stack used inside.
   */
  _stack?: Partial<IStackProps>;

  /**
   * Passed props wilICheckboxGroupProps will be applied on the disabled state.
   */
  _disabled?: Omit<Partial<IRadioProps>, '_disabled'>;
  /**
   * Passed props will be applied on checked state.
   */
  _checked?: Omit<Partial<IRadioProps>, '_checked'>;
  /**
   * Passed props will be applied on focus state.
   */
  _focus?: Omit<Partial<IRadioProps>, '_focus'>;
  /**
   * Passed props will be applied on hover state.
   */
  _hover?: Omit<Partial<IRadioProps>, '_hover'>;
  /**
   * Passed props will be applied on invalid state.
   */
  _invalid?: Omit<Partial<IRadioProps>, '_invalid'>;
  /**
   * Passed props will be applied on pressed state on native.
   */
  _pressed?: Omit<Partial<IRadioProps>, '_pressed'>;
  /**
   * Icon related props can be passed in _icon.
   */
  _icon?: Partial<IIconProps>;
  /**
   * Passed props will be applied on readonly state.
   */
  _readOnly?: Omit<Partial<IRadioProps>, '_readOnly'>;
  /**
   * You can style interaction box around the checkbox using this.
   */
  _interactionBox?: Omit<Partial<IRadioProps>, '_interactionBox'>;

  ref?: MutableRefObject<any>;
  // /**
  //  * Passed props will be applied on unchecked state.
  //  */
  // _unchecked?: Omit<Partial<IRadioProps>, '_unchecked'>;
}
export interface IRadioGroupProps extends IStackProps {
  /**
   * The value of the radio group.
   */
  value?: IRadioValue;
  /**
   * The name of the input field in a radio (Useful for form submission).
   */
  name: string;
  /**
   * The initial value of the radio group.
   */
  defaultValue?: IRadioValue;
  /**
   * The color of the radios. This should be one of the color keys in the theme (e.g."green", "red").
   * @default 'primary'
   */
  colorScheme?: ColorSchemeType;
  /**
   * 	The size (width and height) of the radio.
   */
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
  /**
   *
   */
  // TODO: removing
  // children?:
  //   | React.ReactElement<IRadioProps>
  //   | React.ReactElement<IRadioProps>[];
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: IRadioGroupOnChangeHandler;
  /**
   * Pass props will be passed to each radio.
   */
  _radio?: Partial<IRadioProps>;
}
export interface IRadioContext extends IFormControlContext {
  colorScheme?: ColorSchemeType;
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
  state: RadioGroupState;
}

export type IUseRadioGroupReturnType = {
  radioGroupProps: {
    accessibilityRole: AccessibilityRole;
    onChange: (value: IRadioValue) => any;
    value: IRadioValue;
    name: string;
  };
};

export type IRadioComponentType = ((props: IRadioProps) => JSX.Element) & {
  Group: React.MemoExoticComponent<
    (props: IRadioGroupProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};

export type IRadioProps = InterfaceRadioProps & CustomProps<'Radio'>;
