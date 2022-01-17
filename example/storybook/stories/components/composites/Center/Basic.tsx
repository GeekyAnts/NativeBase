import React from 'react';
import { Center } from 'native-base';
export function Example() {
  return (
    <Center>
      <Center
        bg="primary.400"
        _text={{ color: 'white', fontWeight: 'bold' }}
        height={200}
        width={{ base: 200, lg: 250 }}
      >
        This is the Center
      </Center>
    </Center>
  );
}
