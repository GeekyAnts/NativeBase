import React from 'react';
import { Center } from 'native-base';
export function Example() {
  return (
    <Center
      bg="primary.400"
      _text={{ color: 'white', fontWeight: 'bold' }}
      height={200}
      width={{ base: 200, lg: 400 }}
    >
      This is the Center
    </Center>
  );
}
