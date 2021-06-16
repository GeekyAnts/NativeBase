import React from 'react';
import { Input, Stack, Center, Heading, useColorModeValue } from 'native-base';

export const Example = () => {
  return (
    <Stack space={4} w="100%">
      <Center>
        <Heading>Input Variants</Heading>
      </Center>
      <Input
        variant="outline"
        placeholder="Outline"
        placeholderTextColor={useColorModeValue('blueGray.400', 'blueGray.50')}
      />
      <Input
        variant="filled"
        placeholder="Filled"
        placeholderTextColor={useColorModeValue('blueGray.400', 'blueGray.50')}
      />
      <Input
        variant="underlined"
        placeholder="Underlined"
        placeholderTextColor={useColorModeValue('blueGray.400', 'blueGray.50')}
      />
      <Input
        variant="unstyled"
        placeholder="Unstyled"
        placeholderTextColor={useColorModeValue('blueGray.400', 'blueGray.50')}
      />
      <Input
        variant="rounded"
        placeholder="Round"
        placeholderTextColor={useColorModeValue('blueGray.400', 'gray.50')}
      />
    </Stack>
  );
};
