import React from 'react';
import { Button } from 'native-base';

export const Example = () => {
  return (
    <Button.Group
      variant="solid"
      isAttached
      space={6}
      mx={{ base: 'auto', md: 0 }}
    >
      <Button colorScheme="teal" mr={2}>
        Save
      </Button>
      <Button colorScheme="danger" _text={{ color: 'white' }}>
        Cancel
      </Button>
    </Button.Group>
  );
};
