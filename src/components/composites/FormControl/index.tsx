import { default as FormControlBase } from './FormControl';
import { default as FormControlLabel } from './FormControlLabel';
import { default as FormControlErrorMessage } from './FormControlErrorMessage';
import { default as FormControlHelperText } from './FormControlHelperText';
import type { FormControlComponentType } from './types';

let FormControlTemp: any = FormControlBase;
FormControlTemp.Label = FormControlLabel;
FormControlTemp.ErrorMessage = FormControlErrorMessage;
FormControlTemp.HelperText = FormControlHelperText;

// To add typings
const FormControl = FormControlTemp as FormControlComponentType;

export { FormControl };
export {
  FormControlContext,
  useFormControl,
  useFormControlProvider,
  useFormControlContext,
} from './useFormControl';

export type { IFormControlContext } from './useFormControl';

export type {
  IFormControlProps,
  IFormControlLabelProps,
  IFormControlErrorMessageProps,
  IFormControlHelperTextProps,
} from './types';
