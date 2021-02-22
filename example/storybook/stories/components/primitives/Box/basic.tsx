import React from 'react';
import { Box } from 'native-base';
export const Basic = () => {
  return (
    <Box w={'100%'} bg="orange.300" p={4} shadow={4} _text={{ fontSize: 'lg' }}>
      This is a Box
    </Box>
  );
};
