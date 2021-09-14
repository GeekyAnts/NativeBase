import React from 'react';
import { Button, Box } from 'native-base';

export const Example = () => {
  return (
    <Button.Group
      space={1}
      alignItems={{ base: 'center', md: 'flex-start' }}
      direction="column"
    >
      {['xs', 'sm', 'md', 'lg'].map((size) => (
        <Box>
          {/* @ts-ignore */}
          <Button key={size} size={size}>
            BUTTON
          </Button>
        </Box>
      ))}
    </Button.Group>
  );
};
