import React from 'react';
import { Pressable, Text } from 'native-base';
import { Alert } from 'react-native';

export function Example() {
  return (
    <Pressable onPress={() => Alert.alert('hello')} p={2} borderWidth={1}>
      <Text>hello world</Text>
    </Pressable>
  );
}
