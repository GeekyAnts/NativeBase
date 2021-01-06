import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  TextArea,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  thought: string;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'thought' in errors}>
        <FormLabel>What do you think?</FormLabel>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <TextArea
              placeholder="TextArea"
              onChangeText={(value) => onChange(value)}
              defaultValue={value}
            />
          )}
          name="thought"
          rules={{ required: 'Field is required', minLength: 3 }}
          defaultValue="I love Nativebase."
        />
        <FormErrorMessage>{errors.thought?.message}</FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
