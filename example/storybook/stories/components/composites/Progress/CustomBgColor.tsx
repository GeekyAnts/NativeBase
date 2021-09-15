import React from 'react';
import { Box, Progress, Center, Heading } from 'native-base';

export const Example = () => {
  return (
    <Box w="90%">
      <Center mb="10">
        <Heading>Custom Track Color</Heading>
      </Center>
      <Progress
        size="lg"
        colorScheme="primary"
        bg="cyan.200"
        mb="4"
        value={75}
        mx="4"
      />
    </Box>
  );
};
