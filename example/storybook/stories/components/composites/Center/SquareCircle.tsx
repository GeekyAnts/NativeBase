import React from 'react';
import { Circle, Square, Box, HStack, Icon } from 'native-base';
export default function () {
  return (
    <HStack>
      <Circle size={98} bg="danger.400">
        <Icon name="audiotrack" type="MaterialIcons" color="white" size={8} />
      </Circle>
      <Square size="lg" bg="primary.400">
        <Box _text={{ fontWeight: 'bold', fontSize: 'lg', color: 'white' }}>
          20
        </Box>
      </Square>
    </HStack>
  );
}
