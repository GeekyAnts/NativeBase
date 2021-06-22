import PinInputField from './PinInputField';
import PinInputMain from './PinInput';
export type {
  IPinInputContext,
  IPinInputFieldProps,
  IPinInputProps,
} from './types';
import type { IPinInputComponentType } from './types';

let PinInputTemp: any = PinInputMain;
PinInputTemp.Field = PinInputField;

// To add typings
const PinInput = PinInputTemp as IPinInputComponentType;
export { PinInput };
