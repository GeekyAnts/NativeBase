import React from 'react';
import { Box, Progress, VStack } from 'native-base';

export default function () {
  return (
    <Box w="90%">
      <VStack space="md">
        <Progress colorScheme="primary" value={35} />
        <Progress colorScheme="secondary" value={45} />
        <Progress colorScheme="emerald" value={55} />
        <Progress colorScheme="warning" value={65} />
        <Progress colorScheme="light" value={75} />
      </VStack>
    </Box>
  );
}
