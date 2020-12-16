import React from 'react';
import { Heading, VStack } from 'native-base';

export default function () {
  return (
    <VStack>
      <Heading> I'm a Heading</Heading>
      <Heading color="custom.300"> I'm a Heading</Heading>
    </VStack>
  );
}
