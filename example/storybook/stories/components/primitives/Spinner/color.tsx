import React from 'react';
import { Spinner, VStack, Heading } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      <Heading textAlign="center" mb="10">
        Color Scheme
      </Heading>
      <Spinner color="emerald.500" />
      <Spinner color="warning.500" />
      <Spinner color="indigo.500" />
      <Spinner color="cyan.500" />
    </VStack>
  );
};
