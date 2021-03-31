import React from 'react';
import { Column, Box } from 'native-base';

export default function () {
  return (
    <Column h="100">
      <Box w="100" h={'100'} flexGrow={1} bg="green.500" />
      <Box bg="blue.300" h={'100'} flexGrow={2} w="100" />
      <Box flexGrow={1} w="100" h={'100'} bg="tomato" />
    </Column>
  );
}
