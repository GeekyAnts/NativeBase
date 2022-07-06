import React from 'react';
import { Button, Box } from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center">
      <Button
        size="lg"
        colorScheme={'green'}
        onPress={() => console.log('hello world')}
      >
        Click Me
      </Button>
      {/* <Button
        size="sm"
        // colorScheme={'green'}
        onPress={() => console.log('hello world')}
      >
        Click Me
      </Button> */}
      {/* <Button
        size="sm"
        // colorScheme={'green'}
        onPress={() => console.log('hello world')}
      >
        Click Me
      </Button> */}
    </Box>
  );
};
