import React from 'react';
import { Menu, Divider, HamburgerIcon } from 'native-base';
import { Pressable } from 'react-native';

export function Example() {
  return (
    <Menu
      onOpen={() => console.log('opened')}
      onClose={() => console.log('closed')}
      trigger={(triggerProps) => {
        return (
          <Pressable {...triggerProps}>
            <HamburgerIcon />
          </Pressable>
        );
      }}
    >
      <Menu.OptionGroup defaultValue="asc" title="Order" type="radio">
        <Menu.ItemOption value="asc">Ascending</Menu.ItemOption>
        <Menu.ItemOption value="desc">Descending</Menu.ItemOption>
      </Menu.OptionGroup>
      <Divider />
      <Menu.OptionGroup title="Country" type="checkbox">
        <Menu.ItemOption value="email">Email</Menu.ItemOption>
        <Menu.ItemOption value="country">Country</Menu.ItemOption>
      </Menu.OptionGroup>
    </Menu>
  );
}
