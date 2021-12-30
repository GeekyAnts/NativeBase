import React from 'react';
import { Button } from 'native-base';

export const Example = () => {
  return (
    <Button.Group colorScheme="blue" mx={{ base: 'auto', md: 0 }} size="sm">
      <Button>Save</Button>
      <Button>Cancel</Button>
    </Button.Group>
  );
};
