import React from 'react';
import {
  FormControl,
  Input,
  Stack,
  Text,
  ScrollView,
  Divider,
  WarningIcon,
} from 'native-base';

export const Example = () => {
  return (
    <ScrollView>
      <Stack space={4} px={4} safeArea mt={6}>
        <Text bold fontSize="lg">
          Default
        </Text>
        <FormControl>
          <FormControl.Label>Project Title</FormControl.Label>
          <Input />
          <FormControl.HelperText>
            Give your project a title.
          </FormControl.HelperText>
        </FormControl>
        <Divider />
        <Text bold fontSize="lg">
          Disabled
        </Text>
        <FormControl isDisabled>
          <FormControl.Label
            _disabled={{
              _text: {
                color: 'gray.400',
                fontWeight: 'bold',
              },
            }}
          >
            Project Title
          </FormControl.Label>
          <Input placeholder="Title" />
          <FormControl.HelperText>
            Give your project a title.
          </FormControl.HelperText>
        </FormControl>
        <Divider />
        <Text bold fontSize="lg">
          Invalid
        </Text>
        <FormControl isInvalid>
          <FormControl.Label>Project Title</FormControl.Label>
          <Input placeholder="Title" />
          <FormControl.ErrorMessage leftIcon={<WarningIcon size="xs" />}>
            Something is wrong.
          </FormControl.ErrorMessage>
        </FormControl>
      </Stack>
    </ScrollView>
  );
};
