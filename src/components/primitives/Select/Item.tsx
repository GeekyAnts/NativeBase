import React from 'react';
import type { ISelectItemProps } from './types';
import { usePopover } from '../../../core';
import Button from '../Button';
import Text from '../Text';

export const Item = React.memo(
  ({ isDisabled, label, value, _label, style, ...props }: ISelectItemProps) => {
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
    );
  }
);
