import React from 'react';
import { Box, useBreakpointValue } from 'native-base';
export default () => {
  const color = useBreakpointValue({
    base: 'red.200',
    sm: 'blue.200',
    md: 'blue.200',
  });
  return (
    <Box bg={color} w={'100px'}>
      This is a box
    </Box>
  );
};
