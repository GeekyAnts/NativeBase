import React from 'react';
import { Spinner, HStack, Heading } from 'native-base';

export const Example = () => {
  return (
    <HStack space={2}>
      <Heading color="primary.300">Spinner</Heading>
      <Spinner accessibilityLabel="Loading posts" />
    </HStack>
  );
};
