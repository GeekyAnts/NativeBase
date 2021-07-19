import type {
  IInputProps,
  IBoxProps,
  IStackProps,
  IButtonProps,
} from '../../primitives';
import type { IIconButtonProps } from '../../composites';
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
  /**
   * The onchange of the numberInput when its value is changed.
   */
  onChange?: (value: string) => void;
  /**
   * The min prop is used to give the possible minimum value.
   */
  min?: number;
  /**
   * The max prop is used to give the possible maximum value.
   */
  max?: number;
  /**
   * The step prop is used to increase and decrease the value by this step value using input steppers.
   * @default '1'
   */
  step?: number;
  /**
   * The defaultValue is used to fill default value of the numberInput.
   */
  defaultValue?: number;
  /**
   * The value is used to fill value of the numberInput.
   */
  value?: number;
  /**
   * The precision prop is used to give precision of the decimal value in numberInput.
   */
  precision?: number;
  /**
   * If true, prevents the value of the input from being edited.
   */
  isReadOnly?: boolean;
  /**
   * If true, the input will indicate an error.
   */
  isInvalid?: boolean;
  /**
   * If true, the input will be disabled.
   */
  isDisabled?: boolean;
  /**
   * The keepWithinRange, you can't increase or decrease value from your range.
   * @default 'true'
   */
  keepWithinRange?: boolean;
  /**
   * This controls the value update when you blur out of the input. - If true and the value is greater than max, the value will be reset to max - Else, the value remains the same
   * @default 'true'
   */
  clampValueOnBlur?: boolean;
  /**
   * If true, the input will be focused as you increment or decrement the value with the stepper.
   */
  focusInputOnChange?: boolean;
  /**
   * IconButton props can be passed for the stepper button of the input.
   */
  _stepper?: IIconButtonProps;
}

export interface INumberInputFieldProps extends IInputProps {}
export interface INumberInputSteppersProps extends IStackProps {
  children: JSX.Element[] | JSX.Element;
}
export interface INumberInputStepperProps extends IButtonProps {
  isDisabled?: boolean;
  _disabled?: any;
  _active?: any;
  _icon?: IIconButtonProps;
}

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
