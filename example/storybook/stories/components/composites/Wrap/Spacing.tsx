import React from 'react';
import { Wrap, Center } from 'native-base';
export const Example = () => {
  return (
    <Wrap space={10} direction="row">
      <Center w="180px" h="80px" bg="primary.400">
        Box 1
      </Center>
      <Center w="180px" h="80px" bg="secondary.400">
        Box 2
      </Center>
      <Center w="180px" h="80px" bg="emerald.400">
        Box 3
      </Center>
      <Center w="180px" h="80px" bg="rose.400">
        Box 4
      </Center>
    </Wrap>
  );
};
