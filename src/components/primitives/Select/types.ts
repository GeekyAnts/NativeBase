import type { IBoxProps } from '../Box';
import type { IButtonProps } from '../Button';
import type { ITextProps } from '../Text';

export type ISelectProps = IBoxProps & {
  placeholder?: string;
  selectedValue?: string;
  defaultValue?: string;
  onValueChange?: (itemValue: string) => void;
  isDisabled?: boolean;
  dropdownIcon?: JSX.Element;
  variant?: string;
};

export type ISelectItemProps = IButtonProps & {
  label: string;
  value: string;
  _label?: ITextProps;
};

export type ISelectComponentType = ((props: ISelectProps) => JSX.Element) & {
  Item: React.MemoExoticComponent<(props: ISelectItemProps) => JSX.Element>;
};
