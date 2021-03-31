import React from 'react';
import {
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
} from 'native-base';

export default function () {
  return (
    <Container w={'95%'}>
      <FormControl isRequired isInvalid>
        <FormControl.Label>How many components we have</FormControl.Label>
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormControl.HelperText>You can make a guess.</FormControl.HelperText>
        <FormControl.ErrorMessage>
          Don't worry, it's just an example.
        </FormControl.ErrorMessage>
      </FormControl>
    </Container>
  );
}
