import React from 'react';
import { Menu, Divider, Icon } from 'native-base';
import { Pressable } from 'react-native';

export default function () {
  return (
    <Menu
      trigger={(triggerProps: any) => {
        return (
          <Pressable {...triggerProps}>
            <Icon name="menu" />
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
