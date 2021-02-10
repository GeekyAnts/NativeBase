import React from 'react';
import { PinInput, PinInputField, Center, FormControl } from 'native-base';

export default function () {
  return (
    <Center>
      <FormControl isRequired isInvalid>
        <FormControl.Label>OTP</FormControl.Label>
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
        <FormControl.HelperText>
          An otp is send to number ending with +91-XXXXX-XX007.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Please Retry.</FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
}
