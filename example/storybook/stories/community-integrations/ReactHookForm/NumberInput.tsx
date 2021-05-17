import {
  VStack,
  Button,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  version: boolean;
}

export const Example = () => {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'version' in errors}>
        <FormControl.Label>Current Native Base Version:</FormControl.Label>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <NumberInput
              onChange={(val: any) => onChange(val)}
              defaultValue={value}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          )}
          name="version"
          rules={{ required: 'Field is required' }}
          defaultValue={3}
        />
        <FormControl.ErrorMessage>
          {errors.version?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
};
