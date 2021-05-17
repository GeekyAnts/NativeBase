import React from 'react';
import { Button, HStack, Box } from 'native-base';

export const Example = () => {
  return (
    <HStack space={2}>
      {['xs', 'sm', 'md', 'lg'].map((size) => (
        <Box>
          <Button key={size} size={size}>
            BUTTON
          </Button>
        </Box>
      ))}
    </HStack>
  );
};
