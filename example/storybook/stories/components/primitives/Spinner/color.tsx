import React from 'react';
import { Spinner, HStack } from 'native-base';

export const Example = () => {
  return (
    <HStack space={2}>
      <Spinner color="danger.600" />
      <Spinner color="cyan.600" />
      <Spinner color="indigo.600" />
      <Spinner color="warning.600" />
    </HStack>
  );
};
