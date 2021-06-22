import React from 'react';
import { Heading, VStack } from 'native-base';

export function Example() {
  return (
    <VStack alignSelf={{ base: 'center', md: 'flex-start' }}>
      {/* @ts-ignore */}
      <Heading size="4xl">(4xl) Heading</Heading>
      {/* @ts-ignore */}
      <Heading size="3xl">(3xl) Heading</Heading>
      <Heading size="2xl">(2xl) Heading</Heading>
      <Heading size="xl">(xl) Heading</Heading>
      <Heading size="lg">(lg) Heading</Heading>
      <Heading size="md">(md) Heading </Heading>
      <Heading size="sm">(sm) Heading </Heading>
      <Heading size="xs">(xs) Heading </Heading>
    </VStack>
  );
}
