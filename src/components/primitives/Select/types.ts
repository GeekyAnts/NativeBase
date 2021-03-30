import type { IBoxProps } from '../Box';
import type { IButtonProps } from '../Button';
import type { ITextProps } from '../Text';

export type ISelectProps = IBoxProps & {
  placeholder?: string;
  selectedValue?: string;
  onValueChange?: (itemValue: string) => void;
  isDisabled?: boolean; // on Native variant doesn't work on ios
  dropdownIcon?: JSX.Element;
};

export type ISelectItemProps = IButtonProps & {
  label: string;
  value: string;
  _label?: ITextProps;
};

export type ISelectComponentType = ((props: ISelectProps) => JSX.Element) & {
  Item: React.MemoExoticComponent<(props: ISelectItemProps) => JSX.Element>;
};
