import React from 'react';
import { Wrap, Center } from 'native-base';
export default function () {
  return (
    <Wrap spacing={10} align="center" direction="row">
      <Center w="100px" h="80px" bg="red.200">
        Box 1
      </Center>
      <Center w="100px" h="40px" bg="green.200">
        Box 2
      </Center>
      <Center w="100px" h="60px" bg="tomato">
        Box 3
      </Center>
      <Center w="180px" h="80px" bg="blue.200">
        Box 4
      </Center>
    </Wrap>
  );
}
