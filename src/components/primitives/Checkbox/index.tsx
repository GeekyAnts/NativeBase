import CheckboxMain from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import type { ICheckboxComponentType } from './types';

const CheckTemp: any = CheckboxMain;
CheckTemp.Group = CheckboxGroup;

// To add typings
const Checkbox = CheckTemp as ICheckboxComponentType;

export { Checkbox };
export type { ICheckboxGroupProps, ICheckboxProps } from './types';
