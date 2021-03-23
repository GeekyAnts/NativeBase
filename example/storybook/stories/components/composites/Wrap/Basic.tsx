import React from 'react';
import { Wrap, Center } from 'native-base';
export default function () {
  return (
    <Wrap direction="row" space={10}>
      <Center
        size={16}
        bg="primary.400"
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 1
      </Center>
      <Center
        bg="secondary.400"
        size={16}
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 2
      </Center>
      <Center size={16} bg="violet.400" rounded="xl" _text={{ color: 'white' }}>
        Box 3
      </Center>
      <Center size={16} bg="rose.400" rounded="xl" _text={{ color: 'white' }}>
        Box 4
      </Center>
    </Wrap>
  );
}
