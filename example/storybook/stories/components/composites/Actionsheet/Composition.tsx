import React from 'react';
import { Button, Divider, Actionsheet, useDisclose } from 'native-base';

export function Example() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Divider borderColor="gray.300" />
          <Actionsheet.Item _text={{ color: 'blue.500' }}>
            Save
          </Actionsheet.Item>
          <Divider borderColor="gray.300" />
          <Actionsheet.Item _text={{ color: 'blue.500' }}>
            Delete
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
