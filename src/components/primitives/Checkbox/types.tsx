import type { CheckboxGroupState } from '@react-stately/checkbox';
import type { TouchableOpacityProps } from 'react-native';
import type { IFormControlContext } from '../../composites/FormControl';
import type { IBoxProps } from '../Box';
import type { IIconProps } from '../Icon';

export type ICheckboxValue = string;

export interface ICheckboxProps extends IBoxProps {
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
   * The size (width and height) of the checkbox.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * If given, will use this icon instead of the default.
   */
  icon?: JSX.Element;
  /**
   * Passed props will be applied on disabled state.
   */
  _disabled?: any;
  /**
   * Passed props will be applied on checked state.
   */
  _checked?: any;
  /**
   * Passed props will be applied on unchecked state.
   */
  _unchecked?: any;
  /**
   * Passed props will be applied on focus state.
   */
  _focus?: any;
  /**
   * Passed props will be applied on hover state.
   */
  _hover?: any;
  /**
   * Passed props will be applied on invalid state.
   */
  _invalid?: any;
  /**
   * Passed props will be applied on pressed state on native.
   */
  _pressed?: any;
  /**
   * Passed props will be applied on readonly state.
   */
  _readOnly?: any;
  /**
   * Icon related props can be passed in _icon.
   */
  _icon?: IIconProps;
  /**
   * You can style interaction box around the checkbox using this.
   */
  _interactionBox?: any;
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
}
export interface ICheckboxGroupProps extends IBoxProps {
  /**
   * assign id to checkbox group
   */
  id?: string;
  /**
   * The value of the checkbox group.
   */
  value?: Array<any>;
  /**
   * The initial value of the checkbox group.
   */
  defaultValue?: Array<any>;
  /**
   * The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red").
   */
  colorScheme?: string;
  /**
   * The size (width and height) of the checkbox.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The callback fired when any children Checkbox is checked or unchecked.
   */
  onChange?: (values: any) => any;
}
export interface ICheckboxContext extends IFormControlContext {
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: any;
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
    (props: ICheckboxGroupProps, ref?: any) => JSX.Element
  >;
};
