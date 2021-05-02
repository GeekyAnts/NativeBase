import React from 'react';
import { Box } from 'native-base';
export const Basic = () => {
  return (
    <Box
      width={'90%'}
      bg="primary.400"
      p={4}
      shadow={9}
      _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
      _web={{
        width: '40%',
      }}
      _ios={{
        width: '60%',
      }}
    >
      This is a Box
    </Box>
  );
};
