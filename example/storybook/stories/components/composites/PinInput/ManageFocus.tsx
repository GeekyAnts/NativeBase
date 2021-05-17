import React from 'react';
import { PinInput } from 'native-base';

export const Example = () => {
  return (
    <PinInput manageFocus={false}>
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
    </PinInput>
  );
};
