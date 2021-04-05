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
      <Menu.Group title="Profile">
        <Menu.Item>Menu item 1</Menu.Item>
        <Menu.Item>Menu item 2</Menu.Item>
      </Menu.Group>
      <Divider borderColor="gray.300" />
      <Menu.Group title="Help">
        <Menu.Item isDisabled>Menu item 3</Menu.Item>
        <Menu.Item>Menu item 4</Menu.Item>
      </Menu.Group>
    </Menu>
  );
}
