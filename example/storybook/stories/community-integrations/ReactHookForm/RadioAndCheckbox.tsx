import {
  VStack,
  Button,
  FormControl,
  Radio,
  Checkbox,
  Text,
  Icon,
} from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IFormInput {
  hobbies: string;
  gender: number;
}

export const Example = () => {
  const { control, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'hobbies' in errors}>
        <FormControl.Label>Hobbies</FormControl.Label>
        <Controller
          control={control}
          render={({ onChange }) => (
            <Checkbox.Group
              onChange={(values) => {
                onChange(values);
              }}
              flexDirection="row"
            >
              <Checkbox
                value="dart"
                colorScheme="orange"
                icon={<Icon as={MaterialCommunityIcons} name="bullseye" />}
              >
                <Text mx={2}>Darts</Text>
              </Checkbox>
              <Checkbox
                value="movie"
                colorScheme="dark"
                icon={<Icon as={MaterialCommunityIcons} name="bat" />}
              >
                <Text mx={2}>Movie</Text>
              </Checkbox>
              <Checkbox
                colorScheme="red"
                value="camping"
                icon={<Icon as={MaterialCommunityIcons} name="campfire" />}
              >
                <Text mx={2}>Camping</Text>
              </Checkbox>
              <Checkbox
                value="chess"
                colorScheme="blue"
                icon={<Icon as={MaterialCommunityIcons} name="chess-knight" />}
              >
                <Text mx={2}>Chess</Text>
              </Checkbox>
            </Checkbox.Group>
          )}
          rules={{ required: 'Atleast 1 hobbie needed' }}
          name="hobbies"
          defaultValue=""
        />
        <FormControl.ErrorMessage>
          {errors.hobbies?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={'gender' in errors}>
        <FormControl.Label>Gender</FormControl.Label>
        <Controller
          control={control}
          render={({ onChange }) => (
            <Radio.Group
              name="gender"
              flexDirection="row"
              onChange={(val) => onChange(val)}
            >
              <Radio value="male" colorScheme="blue">
                <Text mx={2}>Male</Text>
              </Radio>
              <Radio value="female" colorScheme="pink">
                <Text mx={2}>Female</Text>
              </Radio>
            </Radio.Group>
          )}
          name="gender"
          rules={{ required: 'Gender is required' }}
        />
        <FormControl.ErrorMessage>
          {errors.gender?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
};
