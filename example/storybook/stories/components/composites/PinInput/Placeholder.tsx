import React from 'react';
import { PinInput } from 'native-base';

export default function () {
  return (
    <PinInput placeholder="🥳">
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
    </PinInput>
  );
}
