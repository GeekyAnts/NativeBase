import React from 'react';
import { Box, Text } from 'native-base';

export const Example = () => {
  return (
    <Box
      bg="primary.400"
      justifyContent="center"
      alignItems="center"
      height={200}
      width={200}
    >
      <Text color="white">This is a Box</Text>
    </Box>
  );
};
