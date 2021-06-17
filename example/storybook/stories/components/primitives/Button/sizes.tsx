import React from 'react';
import { Button, Stack, Box } from 'native-base';

export const Example = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      space={1}
      alignItems={{ base: 'center', md: 'flex-start' }}
    >
      {['xs', 'sm', 'md', 'lg'].map((size) => (
        <Box>
          {/* @ts-ignore */}
          <Button key={size} size={size}>
            BUTTON
          </Button>
        </Box>
      ))}
    </Stack>
  );
};
