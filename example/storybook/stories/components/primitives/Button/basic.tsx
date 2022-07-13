import React from 'react';
import { Button, Box } from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center">
      <Button onPress={() => console.log('hello world')} variant="myBtn">
        Click Me
      </Button>
    </Box>
  );
};
