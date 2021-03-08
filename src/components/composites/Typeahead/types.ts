import type { IBoxProps } from 'native-base';

export type ITypeaheadProps = IBoxProps & {
  options: any[];
  renderItem?: (item: any) => any;
  onChange?: (value: string) => void;
  toggleIcon?: any;
  dropdownHeight?: number | string;
  inputValue?: string;
  onSelectedItemChange?: (value: any) => void;
  numberOfItems?: number;
  getOptionLabel?: (item: any) => string;
  getOptionKey?: (item: any) => any;
  disabledKeys?: Array<any>;
  label?: string;
};

export type IComboBoxProps = {
  items: any[];
  renderItem?: (item: any) => any;
  onInputChange?: (value: string) => void;
  toggleIcon?: any;
  dropdownHeight?: number | string;
  inputValue?: string;
  onSelectionChange?: (value: any) => void;
  children: any;
  disabledKeys?: Array<any>;
  label?: string;
};

export const layoutPropsList = [
  'm',
  'mt',
  'mb',
  'ml',
  'mr',
  'position',
  'flex',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
  'h',
  'w',
  'minW',
  'maxW',
  'minH',
  'maxH',
  'height',
  'width',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'direction',
  'justify',
  'justifyContent',
  'align',
  'alignContent',
  'alignItems',
  'alignSelf',
];
