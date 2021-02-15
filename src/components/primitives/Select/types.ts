import type { IButtonProps } from '../Button';
import type { ITextProps } from '../Text';

export type ISelectProps = IButtonProps & {
  placeholder?: string;
  _placeholder?: ITextProps;
  selectedValue?: string;
  onValueChange: (itemValue: string, itemIndex?: number) => void;
  _item?: ITextProps;
  selectedItemBg?: string;
  _selectedItem?: ITextProps;
  isDisabled?: boolean;
  dropdownIcon?: JSX.Element;
  dropdownOpenIcon?: JSX.Element;
  dropdownCloseIcon?: JSX.Element;
};

export type ISelectItemProps = IButtonProps & {
  label: string;
  value: string;
  _label?: ITextProps;
};
