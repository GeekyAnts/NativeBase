import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Stack,
  Text,
} from 'native-base';

export default function () {
  return (
    <Stack width="90%" space={4}>
      <Text bold underline>
        Custom style for disable:
      </Text>
      <FormControl isDisabled>
        <FormLabel _invalid={{ backgroundColor: '#FED7D7' }}>
          Favorite framework
        </FormLabel>
        <Input p={2} placeholder="Is it react?" />
        <FormHelperText _disabled={{ backgroundColor: '#eee' }}>
          We'll keep this between us.
        </FormHelperText>
        <FormErrorMessage>Something is wrong.</FormErrorMessage>
      </FormControl>
      <Text bold underline>
        Custom style for invalid:
      </Text>
      <FormControl isRequired isInvalid>
        <FormLabel _invalid={{ backgroundColor: '#FED7D7' }}>
          Favorite framework
        </FormLabel>
        <Input p={2} placeholder="Is it react?" />
        <FormHelperText _disabled={{ backgroundColor: '#eee' }}>
          We'll keep this between us.
        </FormHelperText>
        <FormErrorMessage>Something is wrong.</FormErrorMessage>
      </FormControl>
      <Text bold underline>
        Custom style for disable as well as invalid:
      </Text>
      <FormControl isRequired isInvalid isDisabled>
        <FormLabel _invalid={{ backgroundColor: '#FED7D7' }}>
          Favorite framework
        </FormLabel>
        <Input p={2} placeholder="Is it react?" />
        <FormHelperText _disabled={{ backgroundColor: '#eee' }}>
          We'll keep this between us.
        </FormHelperText>
        <FormErrorMessage>Something is wrong.</FormErrorMessage>
      </FormControl>
    </Stack>
  );
}
