import React from 'react';
import { Flex, Icon } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import { MenuItem } from './MenuItem';
import type { IMenuItemOptionProps, IMenuOptionContextProps } from './types';
import { MenuOptionContext } from './MenuOptionGroup';

export const MenuItemOption = React.memo(
  ({ value, children, onPress, ...props }: IMenuItemOptionProps) => {
    const { values, onChange }: IMenuOptionContextProps = React.useContext(
      MenuOptionContext
    );
    const modifiedOnPress = (e: any) => {
      onChange(value);
      onPress && onPress(e);
    };

    const newProps = useThemeProps('MenuItem', props);

    return (
      <MenuItem {...props} onPress={modifiedOnPress}>
        <Flex direction="row" px={newProps.px} alignItems="center">
          <Icon
            name="check"
            pr={newProps.p}
            size={newProps._text.fontSize}
            opacity={values.includes(value) ? 1 : 0}
          />
          {children}
        </Flex>
      </MenuItem>
    );
  }
);
