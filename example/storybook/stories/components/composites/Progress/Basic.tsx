import React from 'react';
import { Box, Progress, Center } from 'native-base';

export const Example = () => {
  return (
    <Center w="100%">
      <Box w="90%" maxW="400">
        <Progress value={45} mx="4" />
      </Box>
    </Center>
  );
};
