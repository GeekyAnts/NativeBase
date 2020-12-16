import React from 'react';
import {
  Menu,
  MenuItemOption,
  IconButton,
  MenuOptionGroup,
  Divider,
  Icon,
} from 'native-base';

export default function () {
  return (
    <Menu
      closeOnSelect={false}
      onOpen={() => console.log('opened')}
      onClose={() => console.log('closed')}
      trigger={(triggerProps) => {
        return (
          <IconButton icon={<Icon name="menu" />} {...triggerProps}>
            Show Menu
          </IconButton>
        );
      }}
    >
      <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
        <MenuItemOption value="asc">Ascending</MenuItemOption>
        <MenuItemOption value="desc">Descending</MenuItemOption>
      </MenuOptionGroup>
      <Divider />
      <MenuOptionGroup title="Country" type="checkbox">
        <MenuItemOption value="email">Email</MenuItemOption>
        <MenuItemOption value="phone">Phone</MenuItemOption>
        <MenuItemOption value="country">Country</MenuItemOption>
      </MenuOptionGroup>
    </Menu>
  );
}
