import React from 'react';
import { Hidden, Text, Stack, Box } from 'native-base';

export function Example() {
  return (
    <Stack>
      <Box bg="orange.300" p={2}>
        <Text>This text will be visible on every platform.</Text>
      </Box>
      <Hidden platform={['android', 'web']}>
        <Box bg="red.400" p={2}>
          <Text>This text will be hidden on android and web.</Text>
        </Box>
      </Hidden>
    </Stack>
  );
}
