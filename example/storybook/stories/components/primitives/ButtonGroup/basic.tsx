import React from 'react';
import { Button } from 'native-base';

export const Example = () => {
  return (
    <Button.Group
      isAttached
      colorScheme="blue"
      mx={{ base: 'auto', md: 0 }}
      size="sm"
    >
      <Button>Edit</Button>
      <Button variant="outline">Save</Button>
    </Button.Group>
  );
};
