import type { TextStyle } from 'react-native';
import type { IButtonProps } from '../Button';
import type { ITextProps } from '../Text';

export type ISelectProps = IButtonProps & {
  placeholder?: string;
  _placeholder?: ITextProps;
  selectedValue?: string;
  onValueChange?: (itemValue: string, itemIndex?: number) => void;
  _item?: ITextProps;
  selectedItemBg?: string;
  _selectedItem?: ITextProps;
  isDisabled?: boolean; // on Native variant doesn't work on ios
  dropdownIcon?: JSX.Element;
  dropdownOpenIcon?: JSX.Element;
  dropdownCloseIcon?: JSX.Element;
  variant?: 'styled' | 'native';
  _ios?: any;
  _android?: any;
  _web?: any;
  itemStyle?: TextStyle; // only on Native variant (ios and Windows)
  androidMode?: 'dialog' | 'dropdown'; // only on Native variant (android)
  androidIconColor?: string; // only on Native variant (android)
  androidPrompt?: string; // only on Native variant (android)
};

export type ISelectItemProps = IButtonProps & {
  label: string;
  value: string;
  _label?: ITextProps;
};

export type ISelectComponentType = ((props: ISelectProps) => JSX.Element) & {
  Item: React.MemoExoticComponent<(props: ISelectItemProps) => JSX.Element>;
};
