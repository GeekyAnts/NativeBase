import React from 'react';
import { Box, Progress, VStack, Center } from 'native-base';

export const Example = () => {
  return (
    <Center w="100%">
      <Box w="90%" maxW="400">
        <VStack space="md">
          <VStack mx="4" space="md">
            <Progress colorScheme="primary" value={35} />
            <Progress colorScheme="secondary" value={45} />
            <Progress colorScheme="emerald" value={55} />
            <Progress colorScheme="warning" value={65} />
            <Progress colorScheme="light" value={75} />
          </VStack>
        </VStack>
      </Box>
    </Center>
  );
};
