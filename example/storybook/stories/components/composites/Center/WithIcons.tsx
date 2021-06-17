import React from 'react';
import { Center, Box, HStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export function Example() {
  return (
    <HStack space={1}>
      <Center w="40px" h="40px" bg="primary.400">
        <Icon as={<MaterialIcons name="audiotrack" />} color="white" size={6} />
      </Center>
      <Center w="40px" h="40px" bg="secondary.400">
        <Box _text={{ fontWeight: 'bold', fontSize: 'lg', color: 'white' }}>
          20
        </Box>
      </Center>
    </HStack>
  );
}
