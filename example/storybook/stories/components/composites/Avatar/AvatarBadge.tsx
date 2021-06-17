import React from 'react';
import { Avatar, HStack } from 'native-base';

export const Example = () => {
  return (
    <HStack mx={{ base: 'auto', md: 0 }} space={2}>
      <Avatar
        source={{
          uri: 'https://alpha.nativebase.io/img/native-base-icon.png',
        }}
      >
        NB
        <Avatar.Badge bg={'red.200'} />
      </Avatar>
      <Avatar
        source={{
          uri: 'https://alpha.nativebase.io/img/native-base-icon.png',
        }}
      >
        NB
        <Avatar.Badge borderColor="papayawhip" bg="tomato" />
      </Avatar>
    </HStack>
  );
};
