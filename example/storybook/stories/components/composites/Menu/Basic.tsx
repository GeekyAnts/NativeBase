import React from 'react';
import { Menu, Divider, HamburgerIcon, IconButton } from 'native-base';

export function Example() {
  return (
    <Menu
      trigger={(triggerProps) => {
        return <IconButton {...triggerProps} icon={<HamburgerIcon />} />;
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
