import React from 'react';
import { Hidden, Text, Stack, Box } from 'native-base';

export function Example() {
  return (
    <Stack>
      <Box bg="orange.300" p={2}>
        <Text>This text will be visible on every screen size.</Text>
      </Box>
      <Hidden only={['sm', 'lg']}>
        <Box bg="red.400" p={2}>
          <Text>This text will be hidden on sm and lg only.</Text>
        </Box>
      </Hidden>
    </Stack>
  );
}
