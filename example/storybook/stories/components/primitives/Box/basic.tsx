import React from 'react';
import { Box } from 'native-base';
export const Example = () => {
  return (
    <>
      <Box
        _web={{
          _web: {
            backgroundColor: 'red',
          },
        }}
        bg="primary.400"
        _text={{
          fontSize: 'md',
          fontWeight: 'bold',
          color: 'white',
          letterSpacing: '5xl',
        }}
      >
        This is a Box
      </Box>
    </>
  );
};
