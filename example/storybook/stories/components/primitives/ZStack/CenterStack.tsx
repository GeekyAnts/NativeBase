import React from 'react';
import { ZStack, Box, Text } from 'native-base';

export default function () {
  return (
    <Box px={8}>
      <ZStack alignItems="center" justifyContent="center">
        <Box p={24} bg="blue.500" />
        <Box p={16} bg="black" />
        <Box p={10} bg="red.200" />
        <Text>Not Inside</Text>
      </ZStack>
    </Box>
  );
}
