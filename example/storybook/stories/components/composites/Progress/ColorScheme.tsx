import React from 'react';
import { Box, Progress } from 'native-base';

export default function () {
  return (
    <Box w="90%">
      <Progress size="xs" mb={4} value={45} />
      <Progress size="sm" colorScheme="success" mb={4} value={45} />
      <Progress size="md" colorScheme="dark" mb={4} value={45} />
      <Progress size="lg" colorScheme="danger" mb={4} value={65} />
      <Progress size="xl" colorScheme="warning" mb={4} value={75} />
      <Progress size="2xl" colorScheme="light" mb={4} value={75} />
    </Box>
  );
}
