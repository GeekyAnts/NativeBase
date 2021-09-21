import React from 'react';
import { Stack, Divider, Box } from 'native-base';

export function Example() {
  return (
    <Stack space={3} alignItems="center">
      <Box>
        <Stack
          direction="row"
          space={2}
          mb="3"
          alignItems="center"
          divider={<Divider thickness="2" bg="coolGray.200" />}
        >
          <Box>Simple</Box>
          <Box>Easy</Box>
          <Box>Beautiful</Box>
        </Stack>
      </Box>
    </Stack>
  );
}
