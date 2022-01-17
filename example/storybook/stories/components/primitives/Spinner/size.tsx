import React from 'react';
import { Spinner, HStack } from 'native-base';

export const Example = () => {
  return (
    <HStack space={8} justifyContent="center" alignItems="center">
      <Spinner size="sm" />
      <Spinner size="lg" />
    </HStack>
  );
};
