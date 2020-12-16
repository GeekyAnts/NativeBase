import React from 'react';
import { Spinner, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={2}>
      <Spinner color="danger.400" />
      <Spinner color="green.500" />
      <Spinner color="blue.500" />
      <Spinner color="warning.500" />
    </HStack>
  );
}
