import React from 'react';
import { Button, ButtonGroup } from 'native-base';

export default function () {
  return (
    <ButtonGroup variant="solid" space={6}>
      <Button colorScheme="teal">Save</Button>
      <Button colorScheme="danger">Cancel</Button>
    </ButtonGroup>
  );
}
