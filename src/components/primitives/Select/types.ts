import type { IBoxProps } from '../Box';
import type { IButtonProps } from '../Button';
import type { ITextProps } from '../Text';
import type { IActionsheetContentProps } from '../../composites/Actionsheet/types';

export type ISelectProps = IBoxProps & {
  placeholder?: string;
  selectedValue?: string;
  placeholderTextColor?: string;
  _item?: any; // only for custom Variant takes object of props that needs to be passed to item by default
  _selectedItem?: any; // only for custom Variant takes object of props that needs to be passed to item when its selected
  defaultValue?: string;
  onValueChange?: (itemValue: string) => void;
  isDisabled?: boolean;
  dropdownIcon?: JSX.Element;
  dropdownOpenIcon?: JSX.Element;
  dropdownCloseIcon?: JSX.Element;
  variant?: 'outline' | 'filled' | 'underlined' | 'unstyled' | 'rounded';
  _actionSheetContent?: IActionsheetContentProps;
  wrapperRef?: any;
};

export type ISelectItemProps = IButtonProps & {
  label: string;
  value: string;
  _label?: ITextProps;
};

export type ISelectComponentType = ((
  props: ISelectProps & { ref?: any }
) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (props: ISelectItemProps & { ref?: any }) => JSX.Element
  >;
};
