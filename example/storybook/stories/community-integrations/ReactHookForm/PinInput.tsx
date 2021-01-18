import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  PinInput,
  PinInputField,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  otp: string;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'otp' in errors}>
        <FormLabel>OTP:</FormLabel>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <PinInput onChange={(val: any) => onChange(val)} value={value}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          )}
          name="otp"
          rules={{ required: 'Field is required', minLength: 4, maxLength: 4 }}
        />
        <FormErrorMessage>{errors.otp?.message}</FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
