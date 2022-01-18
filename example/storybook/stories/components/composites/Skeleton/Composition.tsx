import React from 'react';
import { Skeleton, VStack, HStack, Center } from 'native-base';
export const Example = () => {
  return (
    <Center w="100%">
      <VStack
        w="90%"
        maxW="400"
        borderWidth="1"
        space={6}
        rounded="md"
        alignItems="center"
        _dark={{ borderColor: 'coolGray.500' }}
        _light={{ borderColor: 'coolGray.200' }}
      >
        <Skeleton h="40" />
        <Skeleton
          borderWidth={1}
          borderColor="coolGray.200"
          endColor="warmGray.50"
          size="20"
          rounded="full"
          mt="-70"
        />
        <HStack space="2">
          <Skeleton size="5" rounded="full" />
          <Skeleton size="5" rounded="full" />
          <Skeleton size="5" rounded="full" />
          <Skeleton size="5" rounded="full" />
          <Skeleton size="5" rounded="full" />
        </HStack>
        <Skeleton.Text lines={3} alignItems="center" px="12" />
        <Skeleton mb="3" w="40" rounded="20" />
      </VStack>
    </Center>
  );
};
