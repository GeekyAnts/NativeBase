import React from 'react';
import { Circle, Square, Box, HStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
export function Example() {
  return (
    <HStack space={3}>
      <Circle size={98} bg="secondary.400">
        <Icon as={<MaterialIcons name="audiotrack" />} color="white" size={8} />
      </Circle>
      <Square size="lg" bg="primary.400">
        <Box _text={{ fontWeight: 'bold', fontSize: 'lg', color: 'white' }}>
          20
        </Box>
      </Square>
    </HStack>
  );
}
