import React from 'react';
import type { ISelectItemProps, ISelectContextProps } from './types';
import { usePopover } from '../../../core';
import Button from '../Button';
import Text from '../Text';
import { Picker as RNPicker } from '@react-native-picker/picker';
import { SelectContext } from './Context';

export const Item = ({
  isDisabled,
  label,
  value,
  _label,
  style,
  ...props
}: ISelectItemProps) => {
  const { variant }: ISelectContextProps = React.useContext(SelectContext);
  const {
    parentComponentConfig: {
      selectedValue,
      closeMenu,
      selectedItemBg,
      _selectedItem,
      onValueChange,
      itemsList,
      _item,
    },
  } = usePopover();
  console.log(variant);

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

  return variant === 'styled' ? (
    <Button
      p={1}
      px={2}
      rounded={0}
      minH={0}
      width={150}
      {...props}
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
  ) : (
    <RNPicker.Item label={label} value={value} />
  );
};

export default React.memo(Item);
