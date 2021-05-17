import React from 'react';
import { Box, Progress, VStack, Heading } from 'native-base';

export const Example = () => {
  return (
    <Box w="90%">
      <VStack space="md">
        <Heading textAlign="center" mb={8}>
          Progress Sizes
        </Heading>
        <VStack mx={4} space="md">
          <Progress size="xs" mb={4} value={25} />
          <Progress size="sm" mb={4} value={35} />
          <Progress size="md" mb={4} value={45} />
          <Progress size="lg" mb={4} value={55} />
          <Progress size="xl" mb={4} value={65} />
          <Progress size="2xl" mb={4} value={75} />
        </VStack>
      </VStack>
    </Box>
  );
};
