import React from 'react';
import { Input, useColorModeValue } from 'native-base';

export const Example = () => {
  return (
    <Input
      w="100%"
      mx={3}
      placeholder="Default Input"
      placeholderTextColor={useColorModeValue('blueGray.400', 'blueGray.50')}
    />
  );
};
