import React from 'react';
import { Button } from 'native-base';

export default function () {
  return (
    <Button.Group variant="solid" isAttached space={6}>
      <Button colorScheme="teal">Save</Button>
      <Button colorScheme="danger">Cancel</Button>
    </Button.Group>
  );
}
