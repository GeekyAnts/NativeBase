import React from 'react';
import {
  Menu,
  Divider,
  HamburgerIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';
import { Pressable, ScrollView } from 'react-native';

export function Example() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
    </ScrollView>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
