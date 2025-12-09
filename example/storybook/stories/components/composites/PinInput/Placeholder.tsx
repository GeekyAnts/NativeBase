import React from 'react';
import { PinInput } from '@bilwifi/native-base';

export const Example = () => {
  return (
    <PinInput placeholder="🥳">
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
    </PinInput>
  );
};
