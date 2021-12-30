import React from 'react';
import { Skeleton, VStack, HStack } from 'native-base';
export const Example = () => {
  return (
    <HStack
      w="80%"
      borderWidth="1"
      space={8}
      rounded="md"
      borderColor="coolGray.200"
      p="4"
    >
      <Skeleton flex="1" h="100%" rounded="md" />
      <VStack flex="3" space="4">
        <Skeleton />
        <Skeleton.Text />
        <HStack space="2" alignItems="center">
          <Skeleton size="5" rounded="full" />
          <Skeleton h="3" flex="2" rounded="full" />
          <Skeleton h="3" flex="1" rounded="full" />
        </HStack>
      </VStack>
    </HStack>
  );
};
