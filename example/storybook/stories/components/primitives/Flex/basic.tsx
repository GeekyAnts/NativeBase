import React from 'react';
import { Flex, Text, Center } from 'native-base';

export default function () {
  return (
    <Flex height="500px" width="100px">
      <Center w="100px" h="100px" bg="green.500">
        <Text>Box 1</Text>
      </Center>
      <Center bg="blue.300" h="100px" w="100px">
        <Text>Box 2</Text>
      </Center>
      <Center flex={1} bg="tomato">
        Box 3
      </Center>
    </Flex>
  );
}
