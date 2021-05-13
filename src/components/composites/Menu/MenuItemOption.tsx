import React from 'react';
import { CheckIcon } from '../../primitives/Icon/Icons';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { MenuItem } from './MenuItem';
import type { IMenuItemOptionProps, IMenuOptionContextProps } from './types';
import { MenuOptionContext } from './MenuOptionGroup';
import { useMenuOptionItem } from './useMenu';
import { HStack } from '../../primitives/Stack';

export const MenuItemOption = React.memo(
  React.forwardRef(function MenuItemOption(
    { value, children, onPress, ...props }: IMenuItemOptionProps,
    ref: any
  ) {
    const {
      values,
      onChange,
      type,
    }: IMenuOptionContextProps = React.useContext(MenuOptionContext);
    const modifiedOnPress = (e: any) => {
      onChange(value);
      onPress && onPress(e);
    };

    const newProps = usePropsResolution('MenuItem', props);
    const isChecked = values.includes(value);
    const menuOptionProps = useMenuOptionItem({ isChecked, type });

    return (
      <MenuItem
        {...props}
        {...menuOptionProps}
        accessibilityRole="button"
        onPress={modifiedOnPress}
        ref={ref}
      >
        <HStack px={newProps.px} space={3}>
          <CheckIcon {...newProps._icon} opacity={isChecked ? 1 : 0} />
          <Box>{children}</Box>
        </HStack>
      </MenuItem>
    );
  })
);
