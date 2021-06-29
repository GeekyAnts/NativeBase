import React from 'react';
import { Input, Icon, Box } from 'native-base';
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
            _light={{ color: 'black' }}
            _dark={{ color: 'gray.300' }}
          />
        }
        InputRightElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size="md"
            m={2}
            _light={{ color: 'black' }}
            _dark={{ color: 'gray.300' }}
          />
        }
        placeholder="Input"
        // mx={4}
        _light={{ placeholderTextColor: 'blueGray.400' }}
        _dark={{ placeholderTextColor: 'blueGray.50' }}
      />
    </Box>
  );
};
