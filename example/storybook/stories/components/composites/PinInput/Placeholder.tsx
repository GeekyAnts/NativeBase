import React from 'react';
import { PinInput, PinInputField } from 'native-base';

export default function () {
  return (
    <PinInput placeholder="🥳">
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
}
