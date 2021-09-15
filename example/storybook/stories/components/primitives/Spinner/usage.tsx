import React from 'react';
import { Spinner, HStack, Heading } from 'native-base';

export const Example = () => {
  return (
    <HStack space={2} alignItems="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.600" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};
