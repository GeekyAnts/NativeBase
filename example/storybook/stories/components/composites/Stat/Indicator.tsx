import React from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Heading,
  Box,
} from 'native-base';

export default function () {
  return (
    <Box>
      <Heading>Stat with Indicator</Heading>
      <StatGroup mt={6}>
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>$360</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            56.67%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Received</StatLabel>
          <StatNumber>$45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            99.56
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Box>
  );
}
