import React from 'react';
import { Stack, FormControl, NumberInput } from 'native-base';

export const Example = () => {
  return (
    <Stack w="90%">
      <FormControl isRequired isInvalid>
        <FormControl.Label>How many components we have</FormControl.Label>
        <NumberInput>
          <NumberInput.Field />
          <NumberInput.Stepper>
            <NumberInput.IncrementStepper />
            <NumberInput.DecrementStepper />
          </NumberInput.Stepper>
        </NumberInput>
        <FormControl.HelperText>You can make a guess.</FormControl.HelperText>
        <FormControl.ErrorMessage>
          Don't worry, it's just an example.
        </FormControl.ErrorMessage>
      </FormControl>
    </Stack>
  );
};
