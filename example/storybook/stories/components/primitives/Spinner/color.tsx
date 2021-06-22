import React from 'react';
import { Spinner, HStack, useColorModeValue } from 'native-base';

export const Example = () => {
  return (
    <HStack space={2}>
      <Spinner color="danger.400" />
      <Spinner color="blue.500" />
      <Spinner color={useColorModeValue('gray.900', 'gray.100')} />
      <Spinner color="warning.500" />
    </HStack>
  );
};
