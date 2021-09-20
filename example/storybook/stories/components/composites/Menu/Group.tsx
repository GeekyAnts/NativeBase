import React from 'react';
import { Menu, Divider, HamburgerIcon, Box, Pressable } from 'native-base';

export function Example() {
  return (
    <Box h="80%" w="90%">
      <Menu
        w="190"
        closeOnSelect={false}
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
        <Menu.Group title="Free">
          <Menu.Item>Arial</Menu.Item>
          <Menu.Item>Nunito Sans</Menu.Item>
          <Menu.Item>Roboto</Menu.Item>
        </Menu.Group>
        <Divider my="3" />
        <Menu.Group title="Paid">
          <Menu.Item>SF Pro</Menu.Item>
          <Menu.Item>Helvetica</Menu.Item>
        </Menu.Group>
      </Menu>
    </Box>
  );
}
