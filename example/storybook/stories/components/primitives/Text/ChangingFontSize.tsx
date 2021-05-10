import React from 'react';
import { Text, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={2} alignItems="center">
      <Text fontSize="xs">Extra Small</Text>
      <Text fontSize="sm">Small</Text>
      <Text fontSize="md">Medium</Text>
      <Text fontSize="lg">Large</Text>
      <Text fontSize="xl">Extra Large</Text>
      <Text fontSize="2xl">2 Extra Large</Text>
      <Text fontSize="3xl">3 Extra Large</Text>
      <Text fontSize="4xl">4 Extra Large</Text>
      <Text fontSize="5xl">5 Extra Large</Text>
      <Text fontSize="6xl">6 Extra Large</Text>
    </VStack>
  );
};
