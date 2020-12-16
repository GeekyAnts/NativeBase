import React from 'react';
import { Flex, Text, Center, Box } from 'native-base';

export default function () {
  return (
    <Flex>
      <Center w="100px" bg="green.500">
        <Text>Box 1</Text>
      </Center>
      <Center bg="blue.300" h="100px" w="100px">
        <Text>Box 2</Text>
      </Center>
      <Box flex={1} bg="tomato">
        Box 3
      </Box>
    </Flex>
  );
}
