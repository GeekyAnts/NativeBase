import React from 'react';
import { CircularProgress, Heading, Center, Box, Text } from 'native-base';
import { number } from '@storybook/addon-knobs';
export const Example = () => {
  return (
    <Center>
      <Heading mb={6}>Adding Min and Max</Heading>
      <CircularProgress
        value={550}
        max={number('Max', 1000)}
        min={number('Min', 100)}
        size={100}
      >
        550 / 1000
      </CircularProgress>
      <Box mt={5}>
        <Text>Min: 100</Text>
        <Text>Max: 1000</Text>
      </Box>
    </Center>
  );
};
