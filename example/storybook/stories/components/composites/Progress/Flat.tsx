import React from 'react';
import { Box, Progress, Center, Heading } from 'native-base';

export const Example = () => {
  return (
    <Box w="90%">
      <Center mb={8}>
        <Heading>Flat Progress</Heading>
      </Center>
      <Progress rounded="0" size="lg" value={65} mx={4} />
    </Box>
  );
};
