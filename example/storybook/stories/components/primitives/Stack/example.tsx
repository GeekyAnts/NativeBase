import React from 'react';
import { Stack, Box } from 'native-base';
import { number } from '@storybook/addon-knobs';

export default function () {
  return (
    <Stack space={number('space', 3)} mb={number('mb', 3)}>
      <Box borderRadius={4} height={70} width={70} bg="primary.400" />
      <Box borderRadius={4} height={70} width={70} bg="secondary.400" />
      <Box borderRadius={4} height={70} width={70} bg="emerald.400" />
    </Stack>
  );
}
