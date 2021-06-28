import React from 'react';
import { Input } from 'native-base';

export const Example = () => {
  return (
    <Input
      w="100%"
      mx={3}
      placeholder="Default Input"
      _light={{ placeholderTextColor: 'blueGray.400' }}
      _dark={{ placeholderTextColor: 'blueGray.50' }}
    />
  );
};
