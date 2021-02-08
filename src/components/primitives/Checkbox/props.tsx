import type { CheckboxGroupState } from '@react-stately/checkbox';
import type { TouchableOpacityProps } from 'react-native';
import type { IFormControlContext } from '../../composites/FormControl';
import type { IBoxProps } from '../Box';

export type ICheckboxValue = string;

export type ICheckboxProps = IBoxProps & {
  id?: string;
  name?: string;
  value: ICheckboxValue;
  colorScheme?: string | 'default';
  defaultIsChecked?: boolean;
  isChecked?: boolean;
  isIndeterminate?: boolean;
  // isFullWidth?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: JSX.Element;
  onChange?: (isSelected: boolean) => void;
  // onBlur?: (event: any) => void;
  // onFocus?: (event: any) => void;
  // ariaLabelledby?: string;
  // Custom Props
  style?: any;
};

export type ICheckboxGroupProps = IBoxProps & {
  id?: string;
  value?: Array<any>;
  defaultValue?: Array<any>;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (values: any) => any;
  // Custom props
  style?: any;
};
export type ICheckboxContext = IFormControlContext & {
  name: string;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: any;
  state: CheckboxGroupState;
  value: any;
  onChange: any;
};

export type IUseCheckboxReturnType = {
  inputProps: {
    checked: boolean;
  } & Partial<TouchableOpacityProps>;
};

export type IUseCheckboxGroupReturnType = {
  checkboxGroupProps: {
    onChange: (checkboxValue: ICheckboxValue, isChecked: boolean) => any;
    values: Array<ICheckboxValue>;
  };
};
