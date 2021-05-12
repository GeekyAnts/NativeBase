import React from 'react';
import { Heading, VStack } from 'native-base';

export function Example() {
  return (
    <VStack>
      <Heading size="2xl">(2xl) Heading</Heading>
      <Heading size="xl">(xl) Heading</Heading>
      <Heading size="lg">(lg) Heading</Heading>
      <Heading size="md">(md) Heading </Heading>
      <Heading size="sm">(sm) Heading </Heading>
      <Heading size="xs">(xs) Heading </Heading>
    </VStack>
  );
}
