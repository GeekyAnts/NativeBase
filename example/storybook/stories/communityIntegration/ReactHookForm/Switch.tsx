import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Switch,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  rememberMe: boolean;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isInvalid={'rememberMe' in errors}>
        <FormLabel>Remenber me:</FormLabel>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <Switch
              onToggle={(value: boolean) => onChange(value)}
              isChecked={value}
            />
          )}
          name="rememberMe"
          defaultValue={true}
        />
        <FormErrorMessage>{errors.rememberMe?.message}</FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
