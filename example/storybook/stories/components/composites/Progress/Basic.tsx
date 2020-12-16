import React from 'react';
import { Box, Progress, Heading, Center } from 'native-base';

export default function () {
  return (
    <Box w="90%">
      <Center mb={8}>
        <Heading>This is a Simple Progress Bar</Heading>
      </Center>
      <Progress value={45} />
    </Box>
  );
}
