import React from 'react';
import { PinInput, Center, FormControl } from 'native-base';

export const Example = () => {
  return (
    <Center>
      <FormControl isRequired isInvalid>
        <FormControl.Label>OTP</FormControl.Label>
        <PinInput>
          <PinInput.Field />
          <PinInput.Field />
          <PinInput.Field />
          <PinInput.Field />
        </PinInput>
        <FormControl.HelperText>
          An otp is send to number ending with +91-XXXXX-XX007.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Please Retry.</FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
};
