import React from 'react';
import { Menu, MenuItem, Divider, IconButton, Icon } from 'native-base';

export default function () {
  return (
    <Menu
      trigger={(triggerProps: any) => {
        return (
          <IconButton
            icon={<Icon name="menu" />}
            {...triggerProps}
            bg="teal.200"
          />
        );
      }}
    >
      <MenuItem disabled>Menu item 1</MenuItem>
      <MenuItem>Menu item 2</MenuItem>
      <MenuItem disabled>Menu item 3</MenuItem>
      <Divider />
      <MenuItem>Menu item 4</MenuItem>
    </Menu>
  );
}
