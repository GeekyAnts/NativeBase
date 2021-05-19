import React from 'react';
import { Input, Icon, useColorModeValue } from 'native-base';

export const Example = () => {
  return (
    <Input
      InputLeftElement={
        <Icon
          name="phone"
          size="md"
          type="MaterialIcons"
          m={2}
          color={useColorModeValue('black', 'gray.300')}
        />
      }
      InputRightElement={
        <Icon
          name="person"
          size="md"
          type="MaterialIcons"
          m={2}
          color={useColorModeValue('black', 'gray.300')}
        />
      }
      placeholder="Left and Right InputElement"
      mx={4}
    />
  );
};
