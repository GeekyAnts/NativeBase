import React from 'react';
import { Box } from 'native-base';
export const Example = () => {
  return (
    <>
      <Box
        bg="primary.400"
        p="3"
        w="72"
        _text={{
          fontSize: 'md',
          fontWeight: 'bold',
          color: 'white',
          letterSpacing: 'lg',
        }}
      >
        This is a Box
      </Box>
    </>
  );
};
