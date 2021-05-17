import { VStack, Button, FormControl, PinInput } from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  otp: string;
}

export const Example = () => {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'otp' in errors}>
        <FormControl.Label>OTP:</FormControl.Label>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <PinInput onChange={(val: any) => onChange(val)} value={value}>
              <PinInput.Field />
              <PinInput.Field />
              <PinInput.Field />
              <PinInput.Field />
            </PinInput>
          )}
          name="otp"
          rules={{ required: 'Field is required', minLength: 4, maxLength: 4 }}
        />
        <FormControl.ErrorMessage>
          {errors.otp?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
};
