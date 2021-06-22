import React from 'react';
import { Stat, Heading, Box } from 'native-base';

export const Example = () => {
  return (
    <Box>
      <Heading>Basic Stat Usage</Heading>
      <Stat mt={6}>
        <Stat.Label>Amount</Stat.Label>
        <Stat.Number>£126.00</Stat.Number>
        <Stat.HelpText>Feb 12 - Feb 28</Stat.HelpText>
      </Stat>
    </Box>
  );
};
