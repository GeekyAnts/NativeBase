import React from 'react';
import { Skeleton, VStack } from 'native-base';
export const Example = () => {
  return (
    <VStack
      w="400"
      borderWidth="1"
      space={8}
      overflow="hidden"
      rounded="md"
      borderColor="coolGray.200"
    >
      <Skeleton h="40" />
      <Skeleton.Text px="4" />
      <Skeleton m="4" rounded="md" startColor="primary.100" />
    </VStack>
  );
};
