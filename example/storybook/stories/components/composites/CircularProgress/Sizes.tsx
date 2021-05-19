import React from 'react';
import { CircularProgress, Heading, Center, VStack } from 'native-base';
export const Example = () => {
  return (
    <Center>
      <Heading>Changing the sizes</Heading>
      <VStack alignItems="center">
        <CircularProgress mt={6} value={60} size="xl" />
        <CircularProgress mt={6} value={60} size="lg" />
        <CircularProgress mt={6} value={60} size="md" />
      </VStack>
    </Center>
  );
};
