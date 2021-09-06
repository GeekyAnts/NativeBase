import React from 'react';
import { Pressable, Text } from 'native-base';
import { Alert } from 'react-native';

export function Example() {
  return (
    <Pressable
      onPress={() => Alert.alert('hello')}
      p={2}
      // bg="red.200"
      borderWidth={1}
      // _light={{
      //   bg: 'red.500',
      // _pressed: { bg: 'teal.300', _focus: { bg: 'amber.200' } },
      // }}
      _pressed={{ bg: 'teal.300', borderColor: 'red.500' }}
      // _focus={{ bg: 'white', _pressed: { bg: 'lime.400' } }}
    >
      <Text>hello world</Text>
    </Pressable>
  );
}
