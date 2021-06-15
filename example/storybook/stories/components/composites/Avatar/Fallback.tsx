import React from 'react';
import { Avatar, HStack } from 'native-base';

export const Example = () => {
  return (
    <HStack mx={{ base: 'auto', md: 0 }} space={2}>
      <Avatar mr={1} source={{ uri: 'https://bit.ly/broken-link' }}>
        RS
      </Avatar>
      <Avatar source={{ uri: 'https://bit.ly/broken-link' }}>MR</Avatar>
      <Avatar source={{ uri: 'https://bit.ly/broken-link' }} />
    </HStack>
  );
};
