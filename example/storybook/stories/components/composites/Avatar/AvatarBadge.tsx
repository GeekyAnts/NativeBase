import React from 'react';
import { Avatar, HStack } from 'native-base';

export const Example = () => {
  return (
    <HStack mx={{ base: 'auto', md: '0' }} space={2}>
      <Avatar
        bg="lightBlue.400"
        source={{
          uri: 'https://alpha.nativebase.io/img/native-base-icon.png',
        }}
      >
        NB
        <Avatar.Badge bg="green.500" />
      </Avatar>
      <Avatar
        bg="amber.500"
        source={{
          uri: 'https://alpha.nativebase.io/img/native-base-icon.png',
        }}
      >
        NB
        <Avatar.Badge bg="green.500" />
      </Avatar>
    </HStack>
  );
};
