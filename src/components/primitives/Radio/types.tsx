import type { IBoxProps } from '../../primitives';
import type { IFormControlContext } from '../../composites';
import type { AccessibilityRole } from 'react-native';
import type { RadioGroupState } from '@react-stately/radio';

export type IRadioValue = string;

export type IRadioGroupOnChangeHandler = (value: IRadioValue) => any;

export type IRadioProps = IBoxProps & {
  value: IRadioValue;
  colorScheme?: string | 'default';
  isDisabled?: boolean;
  isInvalid?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: JSX.Element;
  style?: any;
};
export type IRadioGroupProps = IBoxProps & {
  value?: IRadioValue;
  name: string;
  defaultValue?: IRadioValue;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  children?:
    | React.ReactElement<IRadioProps>
    | React.ReactElement<IRadioProps>[];
  onChange?: IRadioGroupOnChangeHandler;
  style?: any;
};
export type IRadioContext = IFormControlContext & {
  name: string;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  // Custom props
  style?: any;
  state: RadioGroupState;
};

export type IUseRadioGroupReturnType = {
  radioGroupProps: {
    accessibilityRole: AccessibilityRole;
    onChange: (value: IRadioValue) => any;
    value: IRadioValue;
    name: string;
  };
};
