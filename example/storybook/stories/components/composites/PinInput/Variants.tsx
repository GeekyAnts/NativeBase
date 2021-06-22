import React from 'react';
import { PinInput, Stack } from 'native-base';

export const Example = () => {
  return (
    <Stack space={5}>
      <PinInput variant="outline">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput variant="underlined">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput variant="rounded">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput variant="filled">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput variant="unstyled">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
    </Stack>
  );
};
