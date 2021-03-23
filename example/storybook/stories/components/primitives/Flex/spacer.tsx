import React from 'react';
import { Flex, Spacer, Center } from 'native-base';

export const SpacerExample = () => {
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
        <Spacer />
        <Center
          size={16}
          bg="secondary.400"
          rounded="xl"
          _text={{ color: 'white' }}
        >
          Box 2
        </Center>
      </Flex>
    </Center>
  );
};
