import React from 'react';
import { Input, Stack, FormControl } from 'native-base';

export const Example = () => {
  return (
    <FormControl isRequired isInvalid>
      <Stack mx={2}>
        <FormControl.Label>Form Controlled Input</FormControl.Label>
        <Input
          placeholder="FormControl is providing me isInvalid prop"
          my={2}
          _light={{ placeholderTextColor: 'blueGray.400' }}
          _dark={{ placeholderTextColor: 'blueGray.50' }}
        />
        <FormControl.HelperText>I am a Helper text 😊</FormControl.HelperText>
        <FormControl.ErrorMessage>
          I'll only appear when FormControl have isInvalid props.
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
};
