import React from 'react';
import type { ISelectItemProps } from './props';
import { usePopover } from '../../../core';
import { themeTools } from '../../../theme';
import TouchableItem from '../../primitives/TouchableItem';
import Text from '../Text';

export default function Item({
  isDisabled,
  label,
  value,
  style,
  ...props
}: ISelectItemProps) {
  const {
    parentComponentConfig: {
      selectedValue,
      closeMenu,
      selectedItemBg,
      onValueChange,
      itemsList,
    },
  } = usePopover();

  const [textProps, touchProps] = themeTools.extractInObject(props, [
    'color',
    'fontWeight',
    'fontStyle',
    'fontFamily',
    'fontSize',
    'padding',
    'px',
    'py',
    'textAlign',
  ]);
  let currentIndex = -1;
  itemsList.forEach((item: any, index: number) => {
    if (item.value === value) {
      currentIndex = index;
    }
  });
  return (
    <TouchableItem
      activeOpacity={0}
      {...touchProps}
      bg={
        selectedValue === value ? selectedItemBg ?? 'teal.200' : 'default.200'
      }
      style={style}
      onPress={() => {
        if (!isDisabled) {
          onValueChange(value, currentIndex);
          closeMenu && closeMenu();
        }
      }}
    >
      <Text {...textProps} key={`select-item-${value}`}>
        {label}
      </Text>
    </TouchableItem>
  );
}
