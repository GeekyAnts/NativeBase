import React from 'react';
import { Wrap, Center } from 'native-base';
export default function () {
  return (
    <Wrap direction="row">
      <Center size={20} bg="red.200">
        Box 1
      </Center>
      <Center size={20} bg="green.200">
        Box 2
      </Center>
      <Center size={20} bg="tomato">
        Box 3
      </Center>
      <Center size={20} bg="blue.200">
        Box 4
      </Center>
    </Wrap>
  );
}
