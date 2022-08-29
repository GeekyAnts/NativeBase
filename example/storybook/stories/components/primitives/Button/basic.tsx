import React from 'react';
import { Button, Box } from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center">
      <Button
        bg="blue.500"
        p="2"
        _hover={{ bg: 'amber.400' }}
        onPress={() => console.log('hello world')}
      >
        Click Me
      </Button>
    </Box>
  );
};
