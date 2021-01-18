import {
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'firstName' in errors}>
        <FormLabel>First Name</FormLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              onBlur={onBlur}
              placeholder="John"
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
          name="firstName"
          rules={{ required: 'Field is required', minLength: 3 }}
          defaultValue=""
        />
        <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={'lastName' in errors}>
        <FormLabel>Last Name</FormLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              onBlur={onBlur}
              placeholder="Doe"
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
          name="lastName"
          defaultValue=""
        />
        <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={'age' in errors}>
        <FormLabel>Age</FormLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              onBlur={onBlur}
              placeholder="24"
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
          name="age"
          rules={{ min: 18, required: 'Age is required' }}
          defaultValue=""
        />
        <FormErrorMessage>
          {errors.age?.type === 'required'
            ? errors.age?.message
            : errors.age?.type === 'min' ?? 'Under age'}
        </FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
