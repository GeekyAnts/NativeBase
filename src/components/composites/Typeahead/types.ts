import type { IBoxProps, IInputProps } from 'native-base';

export type ITypeaheadProps = IBoxProps &
  IInputProps & {
    options: any[];
    renderItem?: any;
    onChange?: Function;
    toggleIcon: any;
    dropdownHeight?: number | string;
    numberOfItems?: number;
    inputValue?: string;
    onSelectedItemChange?: any;
    getOptionLabel?: Function;
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
