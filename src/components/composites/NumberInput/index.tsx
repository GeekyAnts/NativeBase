export { NumberInputContext } from './Context';
import NumberDecrementStepper from './NumberDecrementStepper';
import NumberIncrementStepper from './NumberIncrementStepper';
import NumberInputMain from './NumberInput';
import NumberInputField from './NumberInputField';
import NumberInputStepper from './NumberInputStepper';

import type { INumberInputComponentType } from './types';

export type {
  INumberInputProps,
  INumberInputFieldProps,
  INumberInputSteppersProps,
  INumberInputStepperProps,
} from './types';

let NumberInputTemp: any = NumberInputMain;
NumberInputTemp.Field = NumberInputField;
NumberInputTemp.Stepper = NumberInputStepper;
NumberInputTemp.IncrementStepper = NumberIncrementStepper;
NumberInputTemp.DecrementStepper = NumberDecrementStepper;
// To add typings

const NumberInput = NumberInputTemp as INumberInputComponentType;
export { NumberInput };
