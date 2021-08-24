import React from 'react';
import { Avatar, HStack } from 'native-base';

export const Example = () => {
  return (
    <HStack mx={{ base: 'auto', md: 0 }} space={2}>
      <Avatar
        bg="teal.600"
        mr={1}
        source={{ uri: 'https://bit.ly/broken-link' }}
      >
        RS
      </Avatar>
      <Avatar bg="red.600" source={{ uri: 'https://bit.ly/broken-link' }}>
        MR
      </Avatar>
      <Avatar bg="green.600" source={{ uri: 'https://bit.ly/broken-link' }} />
    </HStack>
  );
};
