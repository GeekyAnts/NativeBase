import type { IBoxProps } from '../Box';
import type { ITextProps } from '../Text';

export type ISelectProps = IBoxProps & {
  label?: string;
  placeholder?: string;
  selectedValue?: string;
  onValueChange: (itemValue: string, itemIndex?: number) => void;
  itemStyle?: ITextProps;
  selectedItemBg?: string;
  isDisabled?: boolean;
  dropdownIcon?: JSX.Element;
};

export type ISelectItemProps = ITextProps & {
  label: string;
  value: string;
  isDisabled?: boolean;
};
