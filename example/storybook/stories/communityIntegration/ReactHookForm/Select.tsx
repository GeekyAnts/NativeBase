import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Icon,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  language: number;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'language' in errors}>
        <FormLabel>Fav language:</FormLabel>
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
              selectedItemBg={'teal.400'}
              dropdownOpenIcon={
                <Icon name="arrow-drop-up" type="MaterialIcons" size={6} />
              }
              dropdownCloseIcon={
                <Icon name="arrow-drop-down" type="MaterialIcons" size={6} />
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
        <FormErrorMessage>{errors.language?.message}</FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
