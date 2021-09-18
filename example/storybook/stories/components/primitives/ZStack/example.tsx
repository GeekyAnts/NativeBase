import React from 'react';
import { ZStack, Box, Heading } from 'native-base';

export const Example = () => {
  return (
    <>
      <Heading mb="10">ZStack</Heading>
      <Box h="40">
        <ZStack mt="3" ml={-50}>
          <Box bg="primary.500" size="20" rounded="lg" shadow={3} />
          <Box
            bg="secondary.500"
            mt="5"
            ml="5"
            size="20"
            rounded="lg"
            shadow={5}
          />
          <Box
            bg="emerald.500"
            mt="10"
            ml="10"
            size="20"
            rounded="lg"
            shadow={7}
          />
        </ZStack>
      </Box>
    </>
  );
};
