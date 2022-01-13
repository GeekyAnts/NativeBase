import React from 'react';
import { Avatar, HStack } from 'native-base';

export const Example = () => {
  return (
    <HStack justifyContent="center" mx={{ base: 'auto', md: '0' }} space={2}>
      <Avatar
        bg="green.500"
        mr="1"
        source={{ uri: 'https://bit.ly/broken-link' }}
      >
        RS
      </Avatar>
      <Avatar bg="amber.500" source={{ uri: 'https://bit.ly/broken-link' }}>
        MR
      </Avatar>
      <Avatar bg="lightBlue.400" source={{ uri: 'https://bit.ly/broken-link' }}>
        --
      </Avatar>
    </HStack>
  );
};
