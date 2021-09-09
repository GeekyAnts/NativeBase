import React, { forwardRef, memo } from 'react';
import { CheckIcon } from '../../primitives/Icon/Icons';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import MenuItem from './MenuItem';
import type { IMenuItemOptionProps, IMenuOptionContextProps } from './types';
import { MenuOptionContext } from './MenuOptionGroup';
import { useMenuOptionItem } from './useMenu';
import { HStack } from '../../primitives/Stack';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const MenuItemOption = (props: IMenuItemOptionProps, ref: any) => {
  const { value, children, onPress, ...resolvedProps } = usePropsResolution(
    'MenuItem',
    props
  );
  const { values, onChange, type }: IMenuOptionContextProps = React.useContext(
    MenuOptionContext
  );
  const modifiedOnPress = (e: any) => {
    onChange(value);
    onPress && onPress(e);
  };

  const isChecked = values.includes(value);
  const menuOptionProps = useMenuOptionItem({ isChecked, type });

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <MenuItem
      {...resolvedProps}
      {...menuOptionProps}
      accessibilityRole="button"
      onPress={modifiedOnPress}
      ref={ref}
    >
      <HStack alignItems="center" px={resolvedProps.px} space={3}>
        <CheckIcon {...resolvedProps._icon} opacity={isChecked ? 1 : 0} />
        <Box>{children}</Box>
      </HStack>
    </MenuItem>
  );
};

export default memo(forwardRef(MenuItemOption));
