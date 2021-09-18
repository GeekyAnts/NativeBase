import React from 'react';
import { Button } from 'native-base';

export const Example = () => {
  return (
    <Button
      size="md"
      height="48px"
      px="5"
      variant="outline"
      borderRadius="999"
      borderWidth="2"
      mx={{ base: 'auto', md: '0' }}
    >
      SHOP NOW
    </Button>
  );
};
