import React from 'react';
import { Pressable, Text } from 'native-base';
import { Alert } from 'react-native';

export function Example() {
  return (
    <Pressable
      onPress={() => Alert.alert('hello')}
      p={2}
      bg="red.200"
      borderWidth={1}
      _pressed={{ bg: 'teal.300', borderColor: 'red.500' }}
    >
      <Text>hello world</Text>
    </Pressable>
  );
}
