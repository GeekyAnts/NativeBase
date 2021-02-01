import React from 'react';
import { Flex, Icon, IconNameType } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import { MenuItem } from './MenuItem';
import type { IMenuItemProps, IMenuOptionContextProps } from './props';
import { MenuOptionContext } from './MenuOptionGroup';
export type IMenuItemOptionProps = IMenuItemProps & {
  value: string | number;
};

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
      <MenuItem {...props} onPress={modifiedOnPress}>
        <Flex direction="row" px={newProps.px} py={newProps.py}>
          <Icon name={iconName} pr={newProps.px} size={newProps.fontSize} />
          {children}
        </Flex>
      </MenuItem>
    );
  }
);
