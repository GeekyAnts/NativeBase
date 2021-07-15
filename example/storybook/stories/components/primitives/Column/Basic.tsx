import React from 'react';
import { Column, Box } from 'native-base';

export const Example = () => {
  return (
    <Column>
      <Box w="100" h={'50'} bg="green.500" />
      <Box bg="blue.300" h={'50'} w="100" />
      <Box w="100" h={'50'} bg="tomato" />
    </Column>
  );
};
