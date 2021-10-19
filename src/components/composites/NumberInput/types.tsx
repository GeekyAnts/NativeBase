import type { IInputProps } from '../../primitives/Input';
import type { IBoxProps } from '../../primitives/Box';
import type { IStackProps } from '../../primitives/Stack';

export type INumberInputProps = IInputProps &
  IBoxProps<INumberInputProps> & {
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    precision?: number;
    isReadOnly?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
    keepWithinRange?: boolean;
    allowMouseWheel?: boolean;
    clampValueOnBlur?: boolean;
    focusInputOnChange?: boolean;
    getAriaValueText?: boolean;
    children?: JSX.Element[] | JSX.Element;
  };

export type INumberInputFieldProps = IInputProps & {};
export type INumberInputSteppersProps = IStackProps & {
  children: JSX.Element[] | JSX.Element;
};
export type INumberInputStepperProps = IBoxProps<INumberInputStepperProps> & {
  isDisabled?: boolean;
  _disabled?: Omit<INumberInputStepperProps, '_disabled'>;
  _active?: Omit<INumberInputStepperProps, '_active'>;
};
export type INumberInputContext = INumberInputProps & {
  numberInputValue?: number;
  value?: number;
  handleChange?: (value: number) => void;
  handleChangeWithoutCheck?: (value: number) => void;
  numberInputStepper?: any;
  setNumberInputStepper?: any;
  isControlled?: boolean;
};
