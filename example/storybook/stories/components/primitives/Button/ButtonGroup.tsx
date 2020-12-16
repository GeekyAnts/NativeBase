import React from 'react';
import { Button, ButtonGroup } from 'native-base';

export default function () {
  return (
    <ButtonGroup variant="solid" spacing={6}>
      <Button colorScheme="blue">Save</Button>
      <Button colorScheme="red">Cancel</Button>
    </ButtonGroup>
  );
}
