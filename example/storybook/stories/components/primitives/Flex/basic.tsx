import React from 'react';
import { Flex, Center } from 'native-base';

export default function () {
  return (
    <Flex h={64} w={20} justify="space-between">
      <Center size={16} bg="emerald.400" rounded="xl">
        Box 1
      </Center>
      <Center bg="lightBlue.400" size={16} rounded="xl">
        Box 2
      </Center>
      <Center size={16} bg="violet.400" rounded="xl">
        Box 3
      </Center>
    </Flex>
  );
}
