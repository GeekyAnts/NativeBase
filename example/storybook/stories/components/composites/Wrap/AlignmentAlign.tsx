import React from 'react';
import { Wrap, Center } from 'native-base';
export default function () {
  return (
    <Wrap spacing={10} align="center" direction="row">
      <Center size={20} bg="red.200">
        Box 1
      </Center>
      <Center size={16} bg="green.200">
        Box 2
      </Center>
      <Center size={12} bg="tomato">
        Box 3
      </Center>
      <Center size={10} bg="blue.200">
        Box 4
      </Center>
    </Wrap>
  );
}
