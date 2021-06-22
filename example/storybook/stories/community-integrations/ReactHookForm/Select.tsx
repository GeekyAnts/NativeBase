import { VStack, Button, FormControl, Select, Icon } from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MaterialIcons } from '@expo/vector-icons';

interface IFormInput {
  language: number;
}

export const Example = () => {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'language' in errors}>
        <FormControl.Label>Fav language:</FormControl.Label>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <Select
              placeholder="Pick language"
              selectedValue={value}
              width={150}
              onValueChange={(itemValue: string) => {
                onChange(itemValue);
              }}
              dropdownOpenIcon={
                <Icon as={MaterialIcons} name="arrow-drop-up" size={6} />
              }
              dropdownCloseIcon={
                <Icon as={MaterialIcons} name="arrow-drop-down" size={6} />
              }
            >
              <Select.Item label="JavaScript" value="js" />
              <Select.Item label="TypeScript" value="ts" />
              <Select.Item label="Java" value="java" />
            </Select>
          )}
          name="language"
          rules={{ required: 'Field is required' }}
          defaultValue="js"
        />
        <FormControl.ErrorMessage>
          {errors.language?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
};
