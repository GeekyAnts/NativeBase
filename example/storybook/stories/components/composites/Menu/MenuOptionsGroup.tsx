import React from 'react';
import { Menu, Divider, Icon } from 'native-base';
import { Pressable } from 'react-native';

export default function () {
  return (
    <Menu
      closeOnSelect={false}
      onOpen={() => console.log('opened')}
      onClose={() => console.log('closed')}
      trigger={(triggerProps) => {
        return (
          <Pressable {...triggerProps}>
            <Icon name="menu" />
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
        <Menu.ItemOption value="email" _text={{ fontWeight: 'bold' }}>
          Email
        </Menu.ItemOption>
        <Menu.ItemOption value="phone">Phone</Menu.ItemOption>
        <Menu.ItemOption value="country">Country</Menu.ItemOption>
      </Menu.OptionGroup>
    </Menu>
  );
}
