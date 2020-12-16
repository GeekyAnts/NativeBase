import React from 'react';
import { PinInput, PinInputField } from 'native-base';

export default function () {
  return (
    <PinInput manageFocus={false}>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
}
