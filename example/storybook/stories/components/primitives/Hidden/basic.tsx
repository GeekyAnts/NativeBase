import React from 'react';
import { Hidden, Text, Stack, Box } from 'native-base';

export function Example() {
  return (
    <Stack>
      <Box bg="orange.300" p={2}>
        <Text>This text will be always visible.</Text>
      </Box>
      <Hidden>
        <Box bg="red.400" p={2}>
          <Text>This text will be always hidden.</Text>
        </Box>
      </Hidden>
    </Stack>
  );
}
