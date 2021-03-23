import React from 'react';
import { Center } from 'native-base';
export default function () {
  return (
    <Center
      bg="primary.400"
      _text={{ color: 'white', fontWeight: 'bold' }}
      height={200}
      width={200}
    >
      This is the Center
    </Center>
  );
}
