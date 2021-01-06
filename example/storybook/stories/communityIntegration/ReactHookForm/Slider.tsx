import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  like: number;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'like' in errors}>
        <FormLabel>Amount you like NativeBase</FormLabel>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <Slider onChange={(value) => onChange(value)} defaultValue={value}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          )}
          name="like"
          rules={{ required: 'Field is required', minLength: 3 }}
          defaultValue={100}
        />
        <FormErrorMessage>{errors.like?.message}</FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
