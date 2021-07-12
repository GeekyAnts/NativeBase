import React from 'react';
import { Skeleton, HStack, VStack } from 'native-base';

export const Example = () => {
  return (
    <HStack
      _web={{ space: 8 }}
      _android={{ space: 6 }}
      _ios={{ space: 6 }}
      alignItems="center"
    >
      <Skeleton
        borderRadius={20}
        startColor="cyan.300"
        endColor="purple.200"
        size="170"
      ></Skeleton>
      <VStack
        space={5}
        _web={{ w: 250, h: 170 }}
        _android={{ size: 170 }}
        _ios={{ size: 170 }}
      >
        <Skeleton
          borderRadius={20}
          startColor="gray.400"
          endColor="gray.700"
          h="6"
          w="75%"
        ></Skeleton>
        <Skeleton.Text
          w="100%"
          noOfLines={3}
          lineHeight={3}
          space={3}
          startColor="gray.100"
          endColor="gray.300"
          h={60}
          borderRadius={20}
        ></Skeleton.Text>
        <HStack w="80%" ml="auto">
          <Skeleton
            ml="auto"
            startColor="gray.100"
            endColor="gray.300"
            borderRadius={10}
            h={8}
            w="45%"
          ></Skeleton>
          <Skeleton
            ml="auto"
            borderRadius={10}
            startColor="green.300"
            endColor="green.700"
            h={8}
            w="45%"
          ></Skeleton>
        </HStack>
      </VStack>
    </HStack>
  );
};
