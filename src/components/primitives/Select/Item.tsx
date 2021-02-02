import React from 'react';
import type { ISelectItemProps } from './props';
import { usePopover } from '../../../core';
import { themeTools } from '../../../theme';
import Button from '../Button';
import Text from '../Text';

export const Item = React.memo(
  ({ isDisabled, label, value, style, ...props }: ISelectItemProps) => {
    const {
      parentComponentConfig: {
        selectedValue,
        closeMenu,
        selectedItemBg,
        selectedItemColor,
        onValueChange,
        itemsList,
        itemStyle,
      },
    } = usePopover();

    const [textProps, touchProps] = themeTools.extractInObject(
      { ...props, ...itemStyle },
      [
        'color',
        'fontWeight',
        'fontStyle',
        'fontFamily',
        'fontSize',
        'padding',
        'px',
        'py',
        'textAlign',
      ]
    );
    let currentIndex = -1;
    itemsList.forEach((item: any, index: number) => {
      if (item.value === value) {
        currentIndex = index;
      }
    });
    return (
      <Button
        p={1}
        px={2}
        rounded={0}
        minH={0}
        width={150}
        {...touchProps}
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
        <Text
          fontSize="sm"
          {...textProps}
          key={`select-item-${value}`}
          color={selectedValue === value ? selectedItemColor : undefined}
        >
          {label}
        </Text>
      </Button>
    );
  }
);
