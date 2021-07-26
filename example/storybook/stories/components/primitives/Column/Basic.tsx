import React from 'react';
import { Column, Box } from 'native-base';

export const Example = () => {
  return (
    <Column>
      <Box h="100px" w="100px" bg="green.500" />
      <Box h="100px" w="100px" bg="blue.300" />
      <Box h="100px" w="100px" bg="tomato" />
    </Column>
  );
};
