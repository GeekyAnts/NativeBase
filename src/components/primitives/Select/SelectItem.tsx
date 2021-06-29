import React, { forwardRef, memo } from 'react';
import type { ISelectItemProps } from './types';
import { Platform } from 'react-native';
import { Actionsheet } from '../../composites/Actionsheet';
import { SelectContext } from './Select';

export const Item = (
  { isDisabled, label, value, ...props }: ISelectItemProps,
  ref?: any
) => {
  const {
    onValueChange,
    selectedValue,
    _selectedItem,
    _item,
  } = React.useContext(SelectContext);
  if (Platform.OS !== 'web') {
    const isSelected = selectedValue === value;

    return (
      <Actionsheet.Item
        ref={ref}
        onPress={() => {
          if (!isDisabled) {
            onValueChange(value);
          }
        }}
        accessibilityState={{ selected: isSelected }}
        {..._item}
        {...(isSelected && _selectedItem)}
        {...props}
      >
        {label}
      </Actionsheet.Item>
    );
  } else {
    return (
      <option ref={ref} value={value}>
        {label}
      </option>
    );
  }
};

export default memo(forwardRef(Item));
