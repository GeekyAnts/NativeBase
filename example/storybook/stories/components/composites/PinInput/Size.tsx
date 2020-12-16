import React from 'react';
import { PinInput, PinInputField, Stack } from 'native-base';

export default function () {
  return (
    <Stack space={5}>
      <PinInput size="2xl">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput size="xl">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput size="lg">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput size="md">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput size="sm">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput size="xs">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </Stack>
  );
}
