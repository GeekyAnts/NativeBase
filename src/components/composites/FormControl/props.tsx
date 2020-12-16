import type { IBoxProps } from '../../primitives';

export type IFormControlProps = IBoxProps & {
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  id?: number;
};
export type IFormControlContext = {
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  id?: number;
};
export type IFormLabelProps = IFormControlProps & {
  style?: any;
  _disabled?: any;
  _focus?: any;
  _invalid?: any;
};
export type IFormErrorMessageProps = IFormControlProps & {};
export type IFormHelperTextProps = IFormControlProps & {
  style?: any;
  _disabled?: any;
  _focus?: any;
  _invalid?: any;
};
