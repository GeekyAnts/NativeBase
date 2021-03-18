import React from 'react';
import { HStack, Center } from 'native-base';

export default function () {
  return (
    <HStack space={3}>
      <Center
        size={16}
        bg="emerald.400"
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 1
      </Center>
      <Center
        bg="lightBlue.400"
        size={16}
        rounded="xl"
        _text={{ color: 'white' }}
      >
        Box 2
      </Center>
      <Center size={16} bg="violet.400" rounded="xl" _text={{ color: 'white' }}>
        Box 3
      </Center>
    </HStack>
  );
}
