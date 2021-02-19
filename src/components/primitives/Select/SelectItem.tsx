import React from 'react';
import type { ISelectItemProps } from './types';
import { usePopover } from '../../../core';
import Button from '../Button';
import Text from '../Text';
import { Picker as RNPicker } from '@react-native-picker/picker';
import { useThemeProps } from '../../../hooks';

export const Item = ({
  isDisabled,
  label,
  value,
  _label,
  style,
  ...props
}: ISelectItemProps) => {
  const { parentComponentConfig } = usePopover();
  const { ...newProps } = useThemeProps('SelectItem', props);
  if (parentComponentConfig?.variant === 'styled') {
    const {
      selectedValue,
      closeMenu,
      selectedItemBg,
      _selectedItem,
      onValueChange,
      itemsList,
      _item,
      width,
    } = parentComponentConfig;

    let currentIndex = -1;
    itemsList.forEach((item: any, index: number) => {
      if (item.value === value) {
        currentIndex = index;
      }
    });
    let textProps = { ..._item, ..._label };
    if (selectedValue === value) {
      textProps = { ..._selectedItem };
    }
    return (
      <Button
        width={width ?? 150}
        {...newProps}
        bg={selectedValue === value ? selectedItemBg : undefined}
        justifyContent="flex-start"
        style={style}
        onPress={() => {
          if (!isDisabled) {
            onValueChange(value, currentIndex);
            closeMenu && closeMenu();
          }
        }}
      >
        <Text fontSize="sm" key={`select-item-${value}`} {...textProps}>
          {label}
        </Text>
      </Button>
    );
  } else {
    return <RNPicker.Item label={label} value={value} />;
  }
};

export default React.memo(Item);
