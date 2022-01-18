import React from 'react';
import { Button, Box } from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center">
      <Button onPress={() => console.log('hello world')}>Click Me</Button>
    </Box>
  );
};
