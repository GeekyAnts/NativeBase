import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
} from 'native-base';

export default function () {
  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormLabel>How many components we have</FormLabel>
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText>You can make a guess.</FormHelperText>
        <FormErrorMessage>Don't worry, it's just an example.</FormErrorMessage>
      </FormControl>
    </Container>
  );
}
