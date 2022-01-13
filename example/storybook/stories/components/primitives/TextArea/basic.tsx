import React from 'react';
import { TextArea, Box } from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center">
      <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="300" />
    </Box>
  );
};
