import React from 'react';
import { Box } from '../../primitives';
import { CheckIcon } from '../../primitives/Icon/Icons';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { MenuItem } from './MenuItem';
import type { IMenuItemOptionProps, IMenuOptionContextProps } from './types';
import { MenuOptionContext } from './MenuOptionGroup';
import { useMenuOptionItem } from './useMenu';

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
        onPress={modifiedOnPress}
        ref={ref}
      >
        <Box
          flexDirection="row"
          px={newProps.px}
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
        >
          <CheckIcon
            // TODO: Needs to update, with _icon (_prop) [Instead of passsing p here.]
            pr={newProps.p}
            // size={newProps._text.fontSize}
            size="sm"
            opacity={isChecked ? 1 : 0}
          />
          {children}
        </Box>
      </MenuItem>
    );
  })
);
