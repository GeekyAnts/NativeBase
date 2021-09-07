import React from 'react';
import { VStack, Center, Heading } from 'native-base';

export function Example() {
  return (
    <VStack space={4} alignItems="center">
      <Heading>VStack</Heading>
      <Center w="64" h="20" bg="primary.400" rounded="md" shadow={3}></Center>
      <Center w="64" h="20" bg="secondary.400" rounded="md" shadow={3}></Center>
      <Center w="64" h="20" bg="emerald.400" rounded="md" shadow={3}></Center>
    </VStack>
  );
}
