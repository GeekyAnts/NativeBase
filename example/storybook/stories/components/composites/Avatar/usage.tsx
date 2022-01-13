import React from 'react';
import { Avatar, HStack } from 'native-base';

export const Example = () => {
  return (
    <HStack justifyContent="center" space={2}>
      <Avatar
        bg="green.500"
        source={{
          uri:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
      >
        AJ
      </Avatar>
      <Avatar
        bg="cyan.500"
        source={{
          uri:
            'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
      >
        TE
      </Avatar>
      <Avatar
        bg="indigo.500"
        source={{
          uri:
            'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
      >
        JB
      </Avatar>
      <Avatar
        bg="amber.500"
        source={{
          uri:
            'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
      >
        TS
      </Avatar>
    </HStack>
  );
};
