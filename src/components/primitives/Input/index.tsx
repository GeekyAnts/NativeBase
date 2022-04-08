export { InputGroup } from './InputGroup';
export { InputRightAddon, InputLeftAddon } from './InputAddons';
export type { IInputGroupProps, IInputProps } from './types';

import InputMain from './Input';
import type { IInputComponentType } from './types';

const InputTemp: any = InputMain;

// To add typings
const Input = InputTemp as IInputComponentType;

export { Input };
