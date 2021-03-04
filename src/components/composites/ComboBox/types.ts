import type { IBoxProps } from 'native-base';

export type IItem = {
  key: any;
  value: any;
};

export type IComboBoxProps = IBoxProps & {
  items: IItem[];
  renderItem?: (item: any) => any;
  onInputChange?: (value: string) => void;
  toggleIcon?: any;
  dropdownHeight?: number | string;
  numberOfItems?: number;
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
