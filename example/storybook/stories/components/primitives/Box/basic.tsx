import React from 'react';
import { Box } from 'native-base';
export const Basic = () => {
  return (
    <Box
      w={'90%'}
      bg="primary.400"
      p={4}
      shadow={9}
      _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
      _web={{
        w: '40%',
      }}
      _ios={{
        w: '80%',
      }}
    >
      This is a Box
    </Box>
  );
};
