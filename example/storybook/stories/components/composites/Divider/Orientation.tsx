import React from 'react';
import { Divider, Flex, Box, Heading } from 'native-base';

export const Example = () => {
  return (
    <Box w="160">
      <Heading mx="auto">Shoes</Heading>
      <Divider my="2" />
      <Flex mx="3" direction="row" justify="space-evenly">
        <Heading>Girls</Heading>
        <Divider orientation="vertical" mx="2" />
        <Heading>Boys</Heading>
      </Flex>
    </Box>
  );
};
