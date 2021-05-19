import React from 'react';
import { Wrap, Center } from 'native-base';
export const Example = () => {
  return (
    <Wrap space={10} align="center" direction="row">
      <Center size={20} bg="primary.400">
        Box 1
      </Center>
      <Center size={16} bg="secondary.400">
        Box 2
      </Center>
      <Center size={12} bg="emerald.400">
        Box 3
      </Center>
      <Center size={10} bg="rose.400">
        Box 4
      </Center>
    </Wrap>
  );
};
