import React from 'react';
import { HStack, Stack, Center, Heading } from 'native-base';

export function Example() {
  return (
    <Stack space={3} alignItems="center">
      <Heading textAlign="center" mb="10">
        HStack
      </Heading>
      <HStack space={3} alignItems="center">
        <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="secondary.500" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="emerald.500" rounded="md" shadow={3} />
      </HStack>
    </Stack>
  );
}
