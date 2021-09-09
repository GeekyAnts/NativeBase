import React, { forwardRef, memo } from 'react';
import type { ISelectItemProps } from './types';
import { Platform } from 'react-native';
import { Actionsheet } from '../../composites/Actionsheet';
import { SelectContext } from './Select';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

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
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps({ ...props, isDisabled, label, value })) {
    return null;
  }
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
      <option ref={ref} value={value} disabled={isDisabled}>
        {label}
      </option>
    );
  }
};

export default memo(forwardRef(Item));
