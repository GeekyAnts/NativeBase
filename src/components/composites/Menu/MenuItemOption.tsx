import React from 'react';
import { Icon, Box } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import { MenuItem } from './MenuItem';
import type { IMenuItemOptionProps, IMenuOptionContextProps } from './types';
import { MenuOptionContext } from './MenuOptionGroup';
import { useMenuOptionItem } from './useMenu';

export const MenuItemOption = React.memo(
  ({ value, children, onPress, ...props }: IMenuItemOptionProps) => {
    const {
      values,
      onChange,
      type,
    }: IMenuOptionContextProps = React.useContext(MenuOptionContext);
    const modifiedOnPress = (e: any) => {
      onChange(value);
      onPress && onPress(e);
    };

    const newProps = useThemeProps('MenuItem', props);
    const isChecked = values.includes(value);
    const menuOptionProps = useMenuOptionItem({ isChecked, type });

    return (
      <MenuItem {...props} {...menuOptionProps} onPress={modifiedOnPress}>
        <Box
          flexDirection="row"
          px={newProps.px}
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
        >
          <Icon
            name="check"
            pr={newProps.p}
            size={newProps._text.fontSize}
            opacity={isChecked ? 1 : 0}
          />
          {children}
        </Box>
      </MenuItem>
    );
  }
);
