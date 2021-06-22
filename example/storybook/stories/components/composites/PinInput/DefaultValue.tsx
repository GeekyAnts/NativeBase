import React from 'react';
import { PinInput, Stack } from 'native-base';

export const Example = () => {
  return (
    <Stack space={5}>
      <PinInput defaultValue="123">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
      <PinInput defaultValue="45">
        <PinInput.Field />
        <PinInput.Field />
        <PinInput.Field />
      </PinInput>
    </Stack>
  );
};
