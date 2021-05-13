import React from 'react';
import { Menu, Divider, HamburgerIcon } from 'native-base';
import { Pressable } from 'react-native';

export function Example() {
  return (
    <Menu
      trigger={(triggerProps) => {
        return (
          <Pressable {...triggerProps}>
            <HamburgerIcon />
          </Pressable>
        );
      }}
    >
      <Menu.Item>Aria</Menu.Item>
      <Menu.Item>Nunito Sans</Menu.Item>
      <Menu.Item isDisabled>Tahoma</Menu.Item>
      <Divider />
      <Menu.Item>Roboto</Menu.Item>
      <Menu.Item>Montserrat</Menu.Item>
    </Menu>
  );
}
