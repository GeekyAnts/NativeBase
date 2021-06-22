import { VStack, Button, FormControl, Switch } from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  rememberMe: boolean;
}

export const Example = () => {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isInvalid={'rememberMe' in errors}>
        <FormControl.Label>Remenber me:</FormControl.Label>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <Switch
              onToggle={(val: boolean) => onChange(val)}
              isChecked={value}
            />
          )}
          name="rememberMe"
          defaultValue={true}
        />
        <FormControl.ErrorMessage>
          {errors.rememberMe?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
};
