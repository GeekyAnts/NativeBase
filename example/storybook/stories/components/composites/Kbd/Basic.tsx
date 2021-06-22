import React from 'react';
import { VStack, HStack, Kbd, Text } from 'native-base';

export const Example = () => {
  return (
    <VStack space={8}>
      <HStack>
        <Kbd>shift</Kbd>
        <Text> + </Text>
        <Kbd>C</Kbd>
      </HStack>
      <HStack>
        <Kbd>shift</Kbd>
        <Text> then </Text>
        <Kbd>H</Kbd>
      </HStack>
      <HStack>
        <Kbd>alt</Kbd>
        <Text> or </Text>
        <Kbd>option</Kbd>
      </HStack>
    </VStack>
  );
};
