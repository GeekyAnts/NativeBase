import React from 'react';
import { Divider, Heading, Box } from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center">
      <Box w="140">
        <Heading mx="3" alignItems="center" flexDirection="row">
          Chrome
        </Heading>
        <Divider
          my="2"
          _light={{ bg: 'muted.800' }}
          _dark={{ bg: 'muted.50' }}
        />
        <Heading mx="3" alignItems="center" flexDirection="row">
          Firefox
        </Heading>
      </Box>
    </Box>
  );
};
