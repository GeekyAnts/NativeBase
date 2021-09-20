import React from 'react';
import { Box } from 'native-base';
export const Example = () => {
  return (
    <>
      <Box
        bg="primary.500"
        p="3"
        w="72"
        _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          letterSpacing: 'lg',
        }}
      >
        This is a Box
      </Box>
    </>
  );
};
