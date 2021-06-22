import React from 'react';
import { PinInput, Stack } from 'native-base';

export const Example = () => {
  return (
    <Stack space={5}>
      <PinInput size="2xl">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput size="xl">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput size="lg">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput size="md">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput size="sm">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput size="xs">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
    </Stack>
  );
};
