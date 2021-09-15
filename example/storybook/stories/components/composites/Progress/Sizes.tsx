import React from 'react';
import { Box, Progress, VStack, Heading } from 'native-base';

export const Example = () => {
  return (
    <Box w="90%">
      <VStack space={4}>
        <Heading textAlign="center">Progress Sizes</Heading>
        <VStack mx={4} space={4}>
          <Progress size="xs" value={25} />
          <Progress size="sm" value={35} />
          <Progress size="md" value={45} />
          <Progress size="lg" value={55} />
          <Progress size="xl" value={65} />
          <Progress size="2xl" value={75} />
        </VStack>
      </VStack>
    </Box>
  );
};
