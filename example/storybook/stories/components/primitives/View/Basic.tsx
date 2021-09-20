import React from 'react';
import { Box, Heading, Text } from 'native-base';

export const Example = () => {
  return (
    <Box>
      <Heading>
        A component library for the
        <Heading color="emerald.500"> React Ecosystem</Heading>
      </Heading>
      <Text mt="3" fontWeight="medium">
        NativeBase is a simple, modular and accessible component library that
        gives you building blocks to build you React applications.
      </Text>
    </Box>
  );
};
