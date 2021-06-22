import React from 'react';
import { Box, Progress, Heading, Center } from 'native-base';

export const Example = () => {
  return (
    <Box w="90%">
      <Center mb={8}>
        <Heading px={0}>This is a Simple Progress Bar</Heading>
      </Center>
      <Progress value={45} mx={4} />
    </Box>
  );
};
