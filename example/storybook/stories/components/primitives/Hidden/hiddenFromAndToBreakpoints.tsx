import React from 'react';
import { Hidden, Text, Stack, Box } from 'native-base';

export function Example() {
  return (
    <Stack>
      <Box bg="orange.300" p={2}>
        <Text>This text will be always visible.</Text>
      </Box>
      <Hidden from="sm" till="lg">
        <Box bg="red.400" p={2}>
          <Text>This text will be hidden from sm to lg screens.</Text>
        </Box>
      </Hidden>
      <Hidden from="sm">
        <Box bg="blue.400" p={2}>
          <Text>This will be hidden from sm to all screen sizes.</Text>
        </Box>
      </Hidden>
    </Stack>
  );
}
