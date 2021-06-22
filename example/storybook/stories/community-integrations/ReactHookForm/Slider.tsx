import { VStack, Button, FormControl, Slider } from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  like: number;
}

export const Example = () => {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'like' in errors}>
        <FormControl.Label>Amount you like NativeBase</FormControl.Label>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <Slider onChange={(val) => onChange(val)} defaultValue={value}>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          )}
          name="like"
          rules={{ required: 'Field is required', minLength: 3 }}
          defaultValue={100}
        />
        <FormControl.ErrorMessage>
          {errors.like?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
};
