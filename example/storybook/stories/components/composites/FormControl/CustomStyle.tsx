import React from 'react';
import { FormControl, Input, Stack, Text } from 'native-base';

export default function () {
  return (
    <Stack width="90%" space={4}>
      <Text bold underline>
        Custom style for disable:
      </Text>
      <FormControl isDisabled>
        <FormControl.Label _invalid={{ backgroundColor: '#FED7D7' }}>
          Favorite framework
        </FormControl.Label>
        <Input p={2} placeholder="Is it react?" />
        <FormControl.HelperText _disabled={{ backgroundColor: '#eee' }}>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
      <Text bold underline>
        Custom style for invalid:
      </Text>
      <FormControl isRequired isInvalid>
        <FormControl.Label _invalid={{ backgroundColor: '#FED7D7' }}>
          Favorite framework
        </FormControl.Label>
        <Input p={2} placeholder="Is it react?" />
        <FormControl.HelperText _disabled={{ backgroundColor: '#eee' }}>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
      <Text bold underline>
        Custom style for disable as well as invalid:
      </Text>
      <FormControl isRequired isInvalid isDisabled>
        <FormControl.Label _invalid={{ backgroundColor: '#FED7D7' }}>
          Favorite framework
        </FormControl.Label>
        <Input p={2} placeholder="Is it react?" />
        <FormControl.HelperText _disabled={{ backgroundColor: '#eee' }}>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>
    </Stack>
  );
}
