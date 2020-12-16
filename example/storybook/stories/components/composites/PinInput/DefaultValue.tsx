import React from 'react';
import { PinInput, PinInputField, Stack } from 'native-base';

export default function () {
  return (
    <Stack space={5}>
      <PinInput defaultValue="123">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput defaultValue="45">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </Stack>
  );
}
