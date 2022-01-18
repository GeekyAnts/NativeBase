import React from 'react';
import { Avatar, HStack } from 'native-base';

export const Example = () => {
  return (
    <HStack justifyContent="center" mx={{ base: 'auto', md: '0' }} space={2}>
      <Avatar
        bg="lightBlue.400"
        source={{
          uri:
            'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
      >
        NB
        <Avatar.Badge bg="green.500" />
      </Avatar>
      <Avatar
        bg="amber.500"
        source={{
          uri:
            'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
      >
        NB
        <Avatar.Badge bg="green.500" />
      </Avatar>
    </HStack>
  );
};
