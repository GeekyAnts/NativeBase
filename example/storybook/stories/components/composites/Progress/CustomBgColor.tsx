import React from 'react';
import { Box, Progress, Center } from 'native-base';

export const Example = () => {
  return (
    <Center w="100%">
      <Box w="90%" maxW="400">
        <Progress colorScheme="primary" bg="coolGray.300" value={75} mx="4" />
      </Box>
    </Center>
  );
};
