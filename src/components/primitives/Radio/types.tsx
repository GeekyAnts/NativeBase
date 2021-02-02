import type { IBoxProps } from '../../primitives';
import type { IFormControlContext } from '../../composites';
import type { AccessibilityRole } from 'react-native';

export type IRadioValue = string | number;

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
  value?: IRadioValue;
  colorScheme?: string;
  size?: 'sm' | 'md' | 'lg';
  onChange: IRadioGroupOnChangeHandler;
  // Custom props
  style?: any;
};

export type IUseRadioGroupReturnType = {
  radioGroupProps: {
    accessibilityRole: AccessibilityRole;
    onChange: (value: IRadioValue) => any;
    value: IRadioValue;
    name: string;
  };
};
