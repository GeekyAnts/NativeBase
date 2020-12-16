import React from 'react';
import { Box, Progress, Center, Heading } from 'native-base';

export default function () {
  return (
    <Box w="90%">
      <Center mb={8}>
        <Heading>Rounded Progress</Heading>
      </Center>
      <Progress rounded="50" size="lg" colorScheme="blue" mb={4} value={65} />
    </Box>
  );
}
