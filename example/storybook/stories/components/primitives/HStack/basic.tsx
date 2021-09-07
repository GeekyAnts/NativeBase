import React from 'react';
import { HStack, Stack, Center, Heading } from 'native-base';

export function Example() {
  return (
    <Stack space={3} alignItems="center">
      <Heading>HStack</Heading>
      <HStack space={3} alignItems="center">
        <Center h="40" w="20" bg="primary.400" rounded="md" shadow={3}></Center>
        <Center
          h="40"
          w="20"
          bg="secondary.400"
          rounded="md"
          shadow={3}
        ></Center>
        <Center h="40" w="20" bg="emerald.400" rounded="md" shadow={3}></Center>
      </HStack>
    </Stack>
  );
}
