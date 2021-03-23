import React from 'react';
import { Flex, Center } from 'native-base';

export default function () {
  return (
    <Center flex={1}>
      <Flex h={56} w={20} justify="space-between">
        <Center
          size={16}
          bg="primary.400"
          rounded="xl"
          _text={{ color: 'white' }}
        >
          Box 1
        </Center>
        <Center
          bg="secondary.400"
          size={16}
          rounded="xl"
          _text={{ color: 'white' }}
        >
          Box 2
        </Center>
        <Center
          size={16}
          bg="emerald.400"
          rounded="xl"
          _text={{ color: 'white' }}
        >
          Box 3
        </Center>
      </Flex>
    </Center>
  );
}
