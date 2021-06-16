import React from 'react';
import { Input, Icon, useColorModeValue, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Box w="100%">
      <Input
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="phone" />}
            size="md"
            m={2}
            color={useColorModeValue('black', 'gray.300')}
          />
        }
        InputRightElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size="md"
            m={2}
            color={useColorModeValue('black', 'gray.300')}
          />
        }
        placeholder="Input"
        // mx={4}
        placeholderTextColor={useColorModeValue('blueGray.400', 'blueGray.50')}
      />
    </Box>
  );
};
