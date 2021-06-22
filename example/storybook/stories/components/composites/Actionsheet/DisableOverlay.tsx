import React from 'react';
import { Button, Actionsheet, useDisclose } from 'native-base';

export function Example() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
        <Actionsheet.Content>
          <Actionsheet.Item>Option 1</Actionsheet.Item>
          <Actionsheet.Item>Option 2</Actionsheet.Item>
          <Actionsheet.Item>Option 3</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
