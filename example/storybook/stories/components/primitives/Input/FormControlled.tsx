import React from 'react';
import { Input, Stack, FormControl } from 'native-base';

export const Example = () => {
  return (
    <FormControl isRequired isInvalid p={2}>
      <Stack mx={4}>
        <FormControl.Label>Form Controlled Input</FormControl.Label>
        <Input
          placeholder="FormControl is providing me isInvalid prop"
          my={2}
        />
        <FormControl.HelperText>I am a Helper text 😊</FormControl.HelperText>
        <FormControl.ErrorMessage>
          I'll only appear when FormControl have isInvalid props.
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
};
