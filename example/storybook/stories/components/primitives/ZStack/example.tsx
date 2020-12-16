import React from 'react';
import { ZStack, Box } from 'native-base';

export default function () {
  return (
    <ZStack alignItems="center">
      <Box p={16} bg="black" />
      <Box p={10} bg="red.200" />
    </ZStack>
  );
}
