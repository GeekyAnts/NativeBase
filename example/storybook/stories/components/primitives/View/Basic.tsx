import React from 'react';
import { View, Center, Heading, Text } from 'native-base';

export const Example = () => {
  return (
    <Center>
      <View w="90%">
        <Heading>
          A component library for the{' '}
          <Text fontSize="3xl" color="emerald.400">
            React Ecosystem
          </Text>
        </Heading>
        <Text pt="3" fontWeight="md">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
      </View>
    </Center>
  );
};
