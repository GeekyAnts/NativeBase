import React from 'react';
import { Button } from 'native-base';

export const Example = () => {
  return (
    <Button
      size="md"
      height="48px"
      width="200px"
      border="2px"
      borderColor="green.500"
      mx={{ base: 'auto', md: 0 }}
    >
      BUTTON
    </Button>
  );
};
