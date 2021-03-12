import React from 'react';
import { Button, Divider, Actionsheet, useDisclose } from 'native-base';

export default function () {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Header my={3}>Header</Actionsheet.Header>
          <Divider borderColor="gray.300" />
          <Actionsheet.Item _text={{ color: 'blue.500' }}>
            Save
          </Actionsheet.Item>
          <Divider borderColor="gray.300" />
          <Actionsheet.Item _text={{ color: 'blue.500' }}>
            Delete
          </Actionsheet.Item>
        </Actionsheet.Content>
        <Actionsheet.Footer>
          <Actionsheet.Item _text={{ color: 'red.500' }} onPress={onClose}>
            Cancel
          </Actionsheet.Item>
        </Actionsheet.Footer>
      </Actionsheet>
    </>
  );
}
