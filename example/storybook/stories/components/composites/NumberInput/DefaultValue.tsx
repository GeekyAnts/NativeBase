import React from 'react';
import {
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from 'native-base';
export const Example = () => {
  return (
    <Stack w="90%">
      <NumberInput defaultValue="5">
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Stack>
  );
};
