import React, { forwardRef, memo, useContext } from 'react';
import { CheckIcon } from '../../primitives/Icon/Icons';
import Text from '../../primitives/Text';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import MenuItem from './MenuItem';
import type { IMenuItemOptionProps, IMenuOptionContextProps } from './types';
import { MenuOptionContext } from './MenuOptionGroup';
import { useMenuOptionItem } from './useMenu';
import { HStack } from '../../primitives/Stack';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const MenuItemOption = (
  { value, ...props }: IMenuItemOptionProps,
  ref: any
) => {
  const { values, onChange, type }: IMenuOptionContextProps = useContext(
    MenuOptionContext
  );
  const isChecked = values.includes(value);
  const menuOptionProps = useMenuOptionItem({ isChecked, type });
  const {
    children,
    onPress,
    _icon,
    _stack,
    _text,
    ...resolvedProps
  } = usePropsResolution('MenuItem', props, { isChecked });

  const modifiedOnPress = (e: any) => {
    onChange(value);
    onPress && onPress(e);
  };

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
      <HStack {..._stack}>
        <CheckIcon {..._icon} />
        {React.Children.map(children, (child, index: any) => {
          if (typeof child === 'string' || typeof child === 'number') {
            return (
              <Text key={index} {..._text}>
                {child}
              </Text>
            );
          } else {
            return child;
          }
        })}
      </HStack>
    </MenuItem>
  );
};

export default memo(forwardRef(MenuItemOption));
