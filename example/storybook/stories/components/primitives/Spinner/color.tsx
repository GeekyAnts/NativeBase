import React from 'react';
import { Spinner, HStack } from 'native-base';

export const Example = () => {
  return (
    <HStack space={8} justifyContent="center">
      <Spinner color="emerald.500" />
      <Spinner color="warning.500" />
      <Spinner color="indigo.500" />
      <Spinner color="cyan.500" />
    </HStack>
  );
};
