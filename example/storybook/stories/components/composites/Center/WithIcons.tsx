import React from 'react';
import { Center, Box, HStack, Icon } from 'native-base';
export default function () {
  return (
    <HStack>
      <Center w="40px" h="40px" bg="primary.400" color="white">
        <Icon name="audiotrack" type="MaterialIcons" color="white" size={6} />
      </Center>
      <Center w="40px" h="40px" bg="secondary.400">
        <Box _text={{ fontWeight: 'bold', fontSize: 'lg', color: 'white' }}>
          20
        </Box>
      </Center>
    </HStack>
  );
}
