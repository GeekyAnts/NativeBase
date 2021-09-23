import React from 'react';
import { Hidden, Text, Stack, Box } from 'native-base';

export function Example() {
  return (
    <Stack>
      <Box bg="orange.300" p={2}>
        <Text _dark={{ color: 'coolGray.800' }}>
          This text will be visible on every colormode.
        </Text>
      </Box>
      <Hidden colorMode="light">
        <Box bg="red.400" p={2} mt={3}>
          <Text _dark={{ color: 'coolGray.800' }}>{'  '}</Text>
        </Box>
      </Hidden>
      <Hidden colorMode="dark">
        <Box bg="red.400" p={2} mt={3}>
          <Text _dark={{ color: 'coolGray.800' }}>
            This text will be hidden on dark mode
          </Text>
        </Box>
      </Hidden>
    </Stack>
  );
}
