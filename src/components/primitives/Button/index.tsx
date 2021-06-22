import ButtonMain from './Button';
import ButtonGroup from './ButtonGroup';
import type { IButtonComponentType } from './types';

const ButtonTemp: any = ButtonMain;
ButtonTemp.Group = ButtonGroup;

// To add typings
const Button = ButtonTemp as IButtonComponentType;

export { Button };
export type { IButtonGroupProps, IButtonProps } from './types';
