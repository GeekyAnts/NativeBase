import React from 'react';
import { Box } from 'native-base';
export const Basic = () => {
  return (
    <Box
      w={'90%'}
      bg="primary.400"
      p={4}
      _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
      nativeID="box-test"
    >
      This is a Box
    </Box>
  );
};
