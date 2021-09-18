import React from 'react';
import { Spinner, VStack, Heading } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      <Heading textAlign="center" mb="10">
        Sizes
      </Heading>
      <Spinner size="sm" />
      <Spinner size="lg" />
    </VStack>
  );
};
