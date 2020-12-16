import React from 'react';
import { Center, Box, HStack, Icon } from 'native-base';
export default function () {
  return (
    <HStack>
      <Center w="40px" h="40px" bg="blue.200" color="white">
        <Icon name="audiotrack" type="MaterialIcons" color="red.300" size={6} />
      </Center>
      <Center w="40px" h="40px" bg="tomato">
        <Box fontWeight="bold" fontSize="lg" color="white">
          20
        </Box>
      </Center>
    </HStack>
  );
}
