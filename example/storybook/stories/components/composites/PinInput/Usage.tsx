import React from 'react';
import { PinInput, PinInputField } from 'native-base';

export default function () {
  return (
    <PinInput size="md" value="32" defaultValue="98">
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
}
