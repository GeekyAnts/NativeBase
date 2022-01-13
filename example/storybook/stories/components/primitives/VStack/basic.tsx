import React from 'react';
import { VStack, Center } from 'native-base';

export function Example() {
  return (
    <VStack space={4} alignItems="center">
      <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
    </VStack>
  );
}
