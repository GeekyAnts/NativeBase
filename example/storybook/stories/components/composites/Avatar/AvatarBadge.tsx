import React from 'react';
import { Avatar, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={2} alignItems="center">
      <Avatar
        bg="lightBlue.400"
        source={{
          uri:
            'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
        size="xs"
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
        size="sm"
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
        size="md"
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
        size="lg"
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
        size="xl"
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
        size="2xl"
      >
        NB
        <Avatar.Badge bg="green.500" />
      </Avatar>
    </VStack>
  );
};
