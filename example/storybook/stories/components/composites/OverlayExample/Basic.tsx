import { Box, Text } from 'native-base';
import React from 'react';
import { OverlayExample } from '../../../../../../src/components/composites';

const Basic = () => {
  return (
    <Box bg="red.200">
      <Text>Hey</Text>
      <OverlayExample />
    </Box>
  );
};

export default Basic;
