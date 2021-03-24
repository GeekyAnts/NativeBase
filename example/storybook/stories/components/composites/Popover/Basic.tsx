import React from 'react';
import { Pressable, Text } from 'react-native';
import { Popover, Button } from 'native-base';

export default function () {
  return (
    <Popover
      trigger={(triggerProps: any) => {
        return (
          <Pressable {...triggerProps}>
            <Text>Hello world</Text>
          </Pressable>
        );
      }}
      placement="bottom"
    >
      <Popover.Arrow></Popover.Arrow>
      <Popover.Content>
        <Popover.CloseButton />
        <Popover.Header>Confirmation!</Popover.Header>
        <Popover.Body>
          Are you sure you want to have that milkshake?
        </Popover.Body>
        {/* <Text>hello</Text> */}
      </Popover.Content>
    </Popover>
  );
}
