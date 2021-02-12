import React from 'react';
import { Flex, Icon, IconNameType } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import { MenuItem } from './MenuItem';
import type { IMenuItemOptionProps, IMenuOptionContextProps } from './types';
import { MenuOptionContext } from './MenuOptionGroup';

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
    let iconName: IconNameType =
      type === 'checkbox'
        ? values.includes(value)
          ? 'check-box'
          : 'check-box-outline-blank'
        : values.includes(value)
        ? 'radio-button-checked'
        : 'radio-button-unchecked';
    const newProps = useThemeProps('MenuItem', props);
    return (
      <MenuItem {...props} px={0} py={0} onPress={modifiedOnPress}>
        <Flex direction="row" px={newProps.px} py={newProps.py}>
          <Icon
            name={iconName}
            pr={newProps.px}
            size={newProps._text.fontSize}
          />
          {children}
        </Flex>
      </MenuItem>
    );
  }
);
