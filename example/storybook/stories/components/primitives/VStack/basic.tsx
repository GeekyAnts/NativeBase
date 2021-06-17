import React from 'react';
import { VStack, Center, Heading } from 'native-base';

export function Example() {
  return (
    <VStack space={4} alignItems="center">
      <Heading>VStack</Heading>
      <Center
        size={16}
        bg="primary.400"
        rounded="md"
        _text={{ color: 'white' }}
        shadow={3}
      >
        Box 1
      </Center>
      <Center
        bg="secondary.400"
        size={16}
        rounded="md"
        _text={{ color: 'white' }}
        shadow={3}
      >
        Box 2
      </Center>
      <Center
        size={16}
        bg="emerald.400"
        rounded="md"
        _text={{ color: 'white' }}
        shadow={3}
      >
        Box 3
      </Center>
    </VStack>
  );
}
