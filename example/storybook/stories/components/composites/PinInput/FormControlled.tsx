import React from 'react';
import {
  PinInput,
  PinInputField,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from 'native-base';

export default function () {
  return (
    <Center>
      <FormControl isRequired isInvalid>
        <FormLabel>OTP</FormLabel>
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
        <FormHelperText>
          An otp is send to number ending with +91-XXXXX-XX007.
        </FormHelperText>
        <FormErrorMessage>Please Retry.</FormErrorMessage>
      </FormControl>
    </Center>
  );
}
