import React from 'react';
import { Flex, Spacer, Center } from 'native-base';

export const Example = () => {
  return (
    <Flex h={40} w={20} mt={6}>
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
  );
};
