import React from 'react';
import { Button, ButtonGroup } from 'native-base';

export default function () {
  return (
    <ButtonGroup variant="contained" spacing={6}>
      <Button colorScheme="default">Save</Button>
      <Button colorScheme="default">Cancel</Button>
    </ButtonGroup>
  );
}
