import type {
  IInputProps,
  IBoxProps,
  IStackProps,
  IButtonProps,
} from '../../primitives';
export interface INumberInputProps
  extends Omit<IInputProps, 'defaultValue' | 'onChange' | 'value'>,
    Omit<
      IBoxProps,
      | 'bgColor'
      | 'background'
      | 'bg'
      | 'backgroundColor'
      | 'shadow'
      | 'style'
      | 'size'
    > {
  onChange?: (value: string) => void;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  precision?: number;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  keepWithinRange?: boolean;
  clampValueOnBlur?: boolean;
  focusInputOnChange?: boolean;
  getAriaValueText?: boolean;
  children?: JSX.Element[] | JSX.Element;
}

export interface INumberInputFieldProps extends IInputProps {}
export interface INumberInputSteppersProps extends IStackProps {
  children: JSX.Element[] | JSX.Element;
}
export interface INumberInputStepperProps extends IButtonProps {
  isDisabled?: boolean;
  _disabled?: any;
  _active?: any;
}
// export interface INumberInputContext extends INumberInputProps {
//   numberInputValue?: string;
//   value?: string;
//   handleChange?: (value: string) => void;
//   handleChangeWithoutCheck?: (value: string) => void;
//   numberInputStepper?: any;
//   setNumberInputStepper?: any;
//   isControlled?: boolean;
// }

export type INumberInputContext = any;

export type INumberInputComponentType = ((
  props: INumberInputProps & { ref?: any }
) => JSX.Element) & {
  Field: React.MemoExoticComponent<
    (props: INumberInputFieldProps & { ref?: any }) => JSX.Element
  >;
  Stepper: React.MemoExoticComponent<
    (props: INumberInputSteppersProps & { ref?: any }) => JSX.Element
  >;
  DecrementStepper: React.MemoExoticComponent<
    (props: INumberInputStepperProps & { ref?: any }) => JSX.Element
  >;
  IncrementStepper: React.MemoExoticComponent<
    (props: INumberInputStepperProps & { ref?: any }) => JSX.Element
  >;
};
