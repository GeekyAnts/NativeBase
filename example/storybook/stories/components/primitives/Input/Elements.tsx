import React from 'react';
import { Input, Icon, useColorModeValue } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export const Example = () => {
  return (
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
      placeholder="Left and Right InputElement"
      mx={4}
    />
  );
};
