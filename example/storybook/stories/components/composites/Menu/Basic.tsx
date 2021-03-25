import React from 'react';
import { Menu, Divider, IconButton, Icon } from 'native-base';

export default function () {
  return (
    <Menu
      trigger={(triggerProps: any) => {
        return <IconButton icon={<Icon name="menu" />} {...triggerProps} />;
      }}
    >
      <Menu.Item isDisabled>Menu item 1</Menu.Item>
      <Menu.Item>Menu item 2</Menu.Item>
      <Menu.Item isDisabled>Menu item 3</Menu.Item>
      <Divider />
      <Menu.Item>Menu item 4</Menu.Item>
    </Menu>
  );
}
