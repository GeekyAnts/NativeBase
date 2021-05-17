import React from 'react';
import { Stat, Heading, Box } from 'native-base';

export const Example = () => {
  return (
    <Box>
      <Heading>Stat with Indicator</Heading>
      <Stat.Group mt={6}>
        <Stat>
          <Stat.Label>Sent</Stat.Label>
          <Stat.Number>$3600</Stat.Number>
          <Stat.HelpText>
            <Stat.Arrow type="increase" />
            56.67%
          </Stat.HelpText>
        </Stat>
        <Stat>
          <Stat.Label>Received</Stat.Label>
          <Stat.Number>$454</Stat.Number>
          <Stat.HelpText>
            <Stat.Arrow type="decrease" />
            99.56%
          </Stat.HelpText>
        </Stat>
      </Stat.Group>
    </Box>
  );
};
