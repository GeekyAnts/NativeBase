import type { IInputProps } from '../../primitives/Input';
import type { InterfaceStackProps } from '../../primitives/Stack/Stack';
import type { ISelectProps } from '../../primitives/Select';
import type { ITextAreaProps } from '../../primitives/TextArea';
import type { CustomProps } from '../../../components/types';

type componentsSpecificProps =
  | ({ component?: 'input' } & IInputProps)
  | ({ component?: 'textarea' } & ITextAreaProps)
  | ({ component?: 'select' } & ISelectProps);

export type ITextFieldProps = (componentsSpecificProps &
  InterfaceStackProps & {
    helperText?: string;
    errorMessage?: string;
    _helperTextProps?: any;
    _errorMessageProps?: any;
  }) &
  CustomProps<'TextField'>;
