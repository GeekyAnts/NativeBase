import React from 'react';
import { Box, Text } from 'native-base';
export const Example = () => {
  return (
    <Box
      bg="primary.400"
      p={4}
      _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
    >
      This is a Box
      <Text></Text>
    </Box>
  );
};
