import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Text,
  Icon,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  hobbies: string;
  gender: number;
}

export default function () {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'hobbies' in errors}>
        <FormLabel>Hobbies</FormLabel>
        <Controller
          control={control}
          render={({ onChange }) => (
            <CheckboxGroup
              onChange={(values) => {
                onChange(values);
              }}
              flexDirection="row"
            >
              <Checkbox
                value="dart"
                colorScheme="orange"
                icon={<Icon name="bullseye" type="MaterialCommunityIcons" />}
              >
                <Text mx={2}>Darts</Text>
              </Checkbox>
              <Checkbox
                value="movie"
                colorScheme="dark"
                icon={<Icon name="bat" type="MaterialCommunityIcons" />}
              >
                <Text mx={2}>Movie</Text>
              </Checkbox>
              <Checkbox
                colorScheme="red"
                value="camping"
                icon={<Icon name="campfire" type="MaterialCommunityIcons" />}
              >
                <Text mx={2}>Camping</Text>
              </Checkbox>
              <Checkbox
                value="chess"
                colorScheme="blue"
                icon={
                  <Icon name="chess-knight" type="MaterialCommunityIcons" />
                }
              >
                <Text mx={2}>Chess</Text>
              </Checkbox>
            </CheckboxGroup>
          )}
          rules={{ required: 'Atleast 1 hobbie needed' }}
          name="hobbies"
          defaultValue=""
        />
        <FormErrorMessage>{errors.hobbies?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={'gender' in errors}>
        <FormLabel>Gender</FormLabel>
        <Controller
          control={control}
          render={({ onChange }) => (
            <RadioGroup
              name="gender"
              flexDirection="row"
              onChange={(value) => onChange(value)}
            >
              <Radio value="male" colorScheme="blue">
                <Text mx={2}>Male</Text>
              </Radio>
              <Radio value="female" colorScheme="pink">
                <Text mx={2}>Female</Text>
              </Radio>
            </RadioGroup>
          )}
          name="gender"
          rules={{ required: 'Gender is required' }}
        />
        <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
}
