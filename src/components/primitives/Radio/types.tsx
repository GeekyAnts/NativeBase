import type { IBoxProps } from '../../primitives';
import type { IFormControlContext } from '../../composites';
import type { AccessibilityRole } from 'react-native';
import type { RadioGroupState } from '@react-stately/radio';

export type IRadioValue = string;

export type IRadioGroupOnChangeHandler = (value: IRadioValue) => any;

export interface IRadioProps extends IBoxProps {
  /**
   * The value to be used in the radio input. This is the value that will be returned on form submission
   */
  value: IRadioValue;
  /**
   * The color of the radio. This should be one of the color keys in the theme (e.g."green", "red").
   * @default 'priamry'
   */
  colorScheme?: string | 'default';
  /**
   * 	If true, the radio will be disabled
   */
  isDisabled?: boolean;
  /**
   * If true, the radio is marked as invalid. Changes style of unchecked state.
   */
  isInvalid?: boolean;
  /**
   * 	The size (width and height) of the radio.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * If given, will use this icon instead of the default.
   */
  icon?: JSX.Element;
  /**
   * Ref to be passed to Icon's wrapper Box
   */
  wrapperRef?: any;
}
export interface IRadioGroupProps extends IBoxProps {
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
   * @default 'priamry'
   */
  colorScheme?: string;
  /**
   * 	The size (width and height) of the radio.
   */
  size?: 'sm' | 'md' | 'lg';
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
}
export interface IRadioContext extends IFormControlContext {
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: any;
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
    (props: IRadioGroupProps & { ref?: any }) => JSX.Element
  >;
};
