import React from 'react';
import { Circle, Square, Box, HStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
export function Example() {
  return (
    <HStack>
      <Circle size={98} bg="secondary.400">
        <Icon name="audiotrack" as={MaterialIcons} color="white" size={8} />
      </Circle>
      <Square size="lg" bg="primary.400">
        <Box _text={{ fontWeight: 'bold', fontSize: 'lg', color: 'white' }}>
          20
        </Box>
      </Square>
    </HStack>
  );
}
