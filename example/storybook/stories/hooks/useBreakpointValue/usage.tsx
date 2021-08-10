import React from 'react';
import { Box, useBreakpointValue } from 'native-base';
export const Example = () => {
  const color = useBreakpointValue([1, { bg: 'red.100' }, 'blue.200']);
  return (
    <Box bg={color} w={'100px'}>
      This is a box
    </Box>
  );
};
