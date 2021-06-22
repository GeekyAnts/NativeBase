import React from 'react';
import { PinInput } from 'native-base';

export const Example = () => {
  return (
    <PinInput placeholder="🥳">
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
    </PinInput>
  );
};
