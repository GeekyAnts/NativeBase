import type { IButtonProps } from '../Button';
import type { ITextProps } from '../Text';

export type ISelectProps = IButtonProps & {
  placeholder?: string;
  selectedValue?: string;
  onValueChange: (itemValue: string, itemIndex?: number) => void;
  itemStyle?: ITextProps;
  selectedItemBg?: string;
  selectedItemColor?: string;
  isDisabled?: boolean;
  dropdownIcon?: JSX.Element;
  dropdownOpenIcon?: JSX.Element;
  dropdownCloseIcon?: JSX.Element;
};

export type ISelectItemProps = ITextProps & {
  label: string;
  value: string;
  isDisabled?: boolean;
};

export type ISelectComponentType = ((props: ISelectProps) => JSX.Element) & {
  Item: React.MemoExoticComponent<(props: ISelectItemProps) => JSX.Element>;
};
