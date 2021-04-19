import React from 'react';
import type { ISelectItemProps } from './types';
import { Platform } from 'react-native';
import { Actionsheet } from '../../composites/Actionsheet';
import { SelectContext } from './Select';
import HStack from '../Stack/HStack';
import Box from '../Box';
import { extractInObject } from '../../../theme/tools';

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
    const [, selectedProps] = extractInObject(_selectedItem, [
      '_label',
      'icon',
    ]);
    const [, itemProps] = extractInObject(_item, ['_label', 'icon']);
    return (
      <Actionsheet.Item
        {...props}
        ref={ref}
        onPress={() => {
          if (!isDisabled) {
            onValueChange(value);
          }
        }}
        accessibilityState={{ selected: isSelected }}
        {...itemProps}
        {...(isSelected && selectedProps)}
      >
        <HStack
          space={4}
          alignItems="center"
          {...itemProps?.stackProps}
          {...(isSelected && _selectedItem?.stackProps)}
        >
          <Box
            _text={{
              ..._item?._label,
              ...(isSelected && _selectedItem?._label),
            }}
          >
            {label}
          </Box>
          {isSelected ? _selectedItem?.icon : _item?.icon}
        </HStack>
      </Actionsheet.Item>
    );
  } else {
    return <option ref={ref} label={label} value={value} />;
  }
};

export default React.memo(React.forwardRef(Item));
