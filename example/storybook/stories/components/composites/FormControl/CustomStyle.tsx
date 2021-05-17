import React from 'react';
import { FormControl, Input, Stack, Text } from 'native-base';

export const Example = () => {
  return (
    <Stack width="90%" space={4} px={4}>
      <Text bold underline>
        Default:
      </Text>
      <FormControl>
        <FormControl.Label>Favorite framework</FormControl.Label>
        <Input />
        <FormControl.HelperText>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
      <Text bold underline>
        Custom style for disable:
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
          Favorite framework
        </FormControl.Label>
        <Input />
        <FormControl.HelperText
          _disabled={{
            borderLeftWidth: 1,
            mt: 1,
            px: 1,
            pl: 2,
            borderColor: 'gray.400',
          }}
        >
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
      <Text bold underline>
        Custom style for invalid:
      </Text>
      <FormControl isRequired isInvalid>
        <FormControl.Label
          _invalid={{
            _text: {
              color: 'rose.500',
              fontWeight: 'bold',
            },
          }}
        >
          Favorite framework
        </FormControl.Label>
        <Input />
        <FormControl.HelperText
          _invalid={{
            _text: {
              color: 'red.400',
              underline: true,
            },
          }}
        >
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
    </Stack>
  );
};
