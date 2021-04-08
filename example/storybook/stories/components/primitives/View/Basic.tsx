import React from 'react';
import { Box, Text } from 'native-base';

export default function () {
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
}
