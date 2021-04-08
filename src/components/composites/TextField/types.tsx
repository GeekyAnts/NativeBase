import type { IInputProps } from '../../primitives/Input';
import type { IStackProps } from '../../primitives/Stack';

export type ITextFieldProps = IInputProps &
  IStackProps & {
    helperText?: string;
    errorMessage?: string;
    _helperTextProps?: any;
    _errorMessageProps?: any;
  };
