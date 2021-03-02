import React from 'react';
import { FormControl, Checkbox, Stack, Text } from 'native-base';

export default function () {
  return (
    <Stack width="90%" space={4}>
      <Text bold underline>
        Default:
      </Text>
      <FormControl isDisabled>
        <FormControl.Label>Favorite framework</FormControl.Label>
        <Checkbox p={2} value="1" />
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
        <Checkbox p={2} value="1" />
        <FormControl.HelperText
          _disabled={{
            borderLeftWidth: 1,
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
        <Checkbox p={2} value="1" />
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
}
