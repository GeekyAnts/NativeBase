import RadioMain from './Radio';
import RadioGroup from './RadioGroup';
import type { IRadioComponentType } from './types';

const RadioTemp: any = RadioMain;
RadioTemp.Group = RadioGroup;

// To add typings
const Radio = RadioTemp as IRadioComponentType;

export { Radio };
export type {
  IRadioProps,
  IRadioGroupProps,
  IRadioContext,
  IRadioValue,
} from './types';
