import React from 'react';
import { Stack, Heading, Divider, Box } from 'native-base';
import { number } from '@storybook/addon-knobs';

export function Example() {
  return (
    <Stack space={3} alignItems="center">
      <Heading>Stack with Divider</Heading>
      <Box>
        <Stack
          direction="row"
          space={number('space', 3)}
          mb={number('mb', 3)}
          alignItems="center"
          divider={<Divider bg="red.200" />}
        >
          <Box>Simple</Box>
          <Box>Easy</Box>
          <Box>Beautiful</Box>
        </Stack>
      </Box>
    </Stack>
  );
}
