import React from 'react';
import { Box, Progress, VStack, Heading } from 'native-base';

export default function () {
  return (
    <Box w="90%">
      <VStack space="md">
        <Heading textAlign="center" mb={8}>
          Progress ColorScheme
        </Heading>
        <Progress colorScheme="primary" value={35} />
        <Progress colorScheme="secondary" value={45} />
        <Progress colorScheme="emerald" value={55} />
        <Progress colorScheme="warning" value={65} />
        <Progress colorScheme="light" value={75} />
      </VStack>
    </Box>
  );
}
