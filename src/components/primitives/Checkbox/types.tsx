import type { CheckboxGroupState } from '@react-stately/checkbox';
import type { MutableRefObject } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import type { IFormControlContext } from '../../composites/FormControl';
import type { InterfaceBoxProps } from '../Box';
import type { IIconProps } from '../Icon';
import type {
  CustomProps,
  ResponsiveValue,
  ThemeComponentSizeType,
} from '../../../components/types';

export type ICheckboxValue = string;

export interface InterfaceCheckbox extends InterfaceBoxProps<ICheckboxProps> {
  /**
   * assign id to checkbox
   */
  id?: string;
  /**
   * The name of the input field in a checkbox.
   */
  name?: string;
  /**
   * The value to be used in the checkbox input. This is the value that will be returned on form submission.
   */
  value: ICheckboxValue;
  /**
   * The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red").
   */
  colorScheme?: string | 'default';
  /**
   * If true, the checkbox will be initially checked. (use defaultValue prop if using it inside Checkbox.Group)
   */
  defaultIsChecked?: boolean;
  /**
   * If true, the checkbox will be checked. You'll need to pass onChange to update it's value (since it's now controlled).
   */
  isChecked?: boolean;
  /**
   * If true, the checkbox will be indeterminate. This only affects the icon shown inside checkbox.
   */
  isIndeterminate?: boolean;
  /**
   * If true, the checkbox will be disabled.
   */
  // isFullWidth?: boolean;
  isDisabled?: boolean;
  /**
   * If true, the checkbox is marked as invalid.
   */
  isInvalid?: boolean;
  /**
   * If true, the checkbox is marked as readonly.
   */
  isReadOnly?: boolean;
  /**
   * If true, the checkbox will be hovered.
   */
  isHovered?: boolean;
  /**
   * If true, the checkbox will be pressed.
   */
  isPressed?: boolean;
  /**
   * If true, the checkbox will be focused.
   */
  isFocused?: boolean;
  /**
   * If true, the checkbox focus ring will be visible.
   */
  isFocusVisible?: boolean;
  /**
   * The size (width and height) of the checkbox.
   * @default 'md'
   */
  size?:
    | ResponsiveValue<'sm' | 'md' | 'lg'>
    | ThemeComponentSizeType<'Checkbox'>;
  /**
   * If given, will use this icon instead of the default.
   */
  icon?: JSX.Element;
  /**
   * Passed props wilICheckboxGroupPropsl be applied on disabled state.
   */
  _disabled?: Omit<Partial<ICheckboxProps>, '_disabled'>;
  /**
   * Passed props will be applied on checked state.
   */
  _checked?: Omit<Partial<ICheckboxProps>, '_checked'>;
  /**
   * Passed props will be applied on unchecked state.
   */
  _unchecked?: Omit<Partial<ICheckboxProps>, '_unchecked'>;
  /**
   * Passed props will be applied on focus state.
   */
  _focus?: Omit<Partial<ICheckboxProps>, '_focus'>;
  /**
   * Passed props will be applied on hover state.
   */
  _hover?: Omit<Partial<ICheckboxProps>, '_hover'>;
  /**
   * Passed props will be applied on invalid state.
   */
  _invalid?: Omit<Partial<ICheckboxProps>, '_invalid'>;
  /**
   * Passed props will be applied on pressed state on native.
   */
  _pressed?: Omit<Partial<ICheckboxProps>, '_pressed'>;
  /**
   * Passed props will be applied on readonly state.
   */
  _readOnly?: Omit<Partial<ICheckboxProps>, '_readOnly'>;
  /**
   * Icon related props can be passed in _icon.
   */
  _icon?: IIconProps;
  /**
   * You can style interaction box around the checkbox using this.
   */
  _interactionBox?: Omit<Partial<ICheckboxProps>, '_interactionBox'>;
  /**
   * Function called when the state of the checkbox changes.
   */
  onChange?: (isSelected: boolean) => void;
  // onBlur?: (event: any) => void;
  // onFocus?: (event: any) => void;
  // ariaLabelledby?: string;
  /**
   * Ref to be passed to Icon's wrapper Box
   */
  wrapperRef?: any;
  ref?: MutableRefObject<any>;
}
export interface ICheckboxGroupProps
  extends InterfaceBoxProps<ICheckboxGroupProps> {
  /**
   * assign id to checkbox group
   */
  id?: string;
  /**
   * The value of the checkbox group.
   */
  value?: Array<string>;
  /**
   * The initial value of the checkbox group.
   */
  defaultValue?: Array<string>;
  /**
   * The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red").
   */
  colorScheme?: string;
  /**
   * The size (width and height) of the checkbox.
   */
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  /**
   * The callback fired when any children Checkbox is checked or unchecked.
   */
  onChange?: (values: any) => any;
  /**
   * Pass props will be passed to each checkbox.
   */
  _checkbox?: ICheckboxProps;
}
export interface ICheckboxContext extends IFormControlContext {
  colorScheme?: string;
  size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
  state: CheckboxGroupState;
}

export interface IUseCheckboxReturnType {
  inputProps: {
    checked: boolean;
  } & Partial<TouchableOpacityProps>;
}

export interface IUseCheckboxGroupReturnType {
  checkboxGroupProps: {
    onChange: (checkboxValue: ICheckboxValue, isChecked: boolean) => any;
    values: Array<ICheckboxValue>;
  };
}

export type ICheckboxComponentType = ((
  props: ICheckboxProps
) => JSX.Element) & {
  Group: React.MemoExoticComponent<
    (props: ICheckboxGroupProps, ref?: MutableRefObject<any>) => JSX.Element
  >;
};

export type ICheckboxProps = InterfaceCheckbox & CustomProps<'Checkbox'>;
