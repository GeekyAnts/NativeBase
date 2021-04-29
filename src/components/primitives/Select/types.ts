import type { IBoxProps } from '../Box';
import type { IButtonProps } from '../Button';
import type { ITextProps } from '../Text';
import type { TextStyle } from 'react-native';
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
  _ios?: any;
  _android?: any;
  _web?: any;
  itemStyle?: TextStyle; // only on Native variant (ios and Windows)
  androidMode?: 'dialog' | 'dropdown'; // only on Native variant (android)
  androidIconColor?: string; // only on Native variant (android)
  androidPrompt?: string;
  type?: 'native' | 'custom';
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
