import React from 'react';
import { Pressable, Text } from 'native-base';
import { Alert } from 'react-native';

export function Example() {
  return (
    <Pressable
      onPress={() => Alert.alert('hello')}
      p="2"
      rounded="sm"
      bg="primary.500"
      _pressed={{ bg: 'primary.700' }}
      _hover={{ bg: 'primary.600' }}
    >
      <Text color="white" fontWeight="medium">
        hello world
      </Text>
    </Pressable>
  );
}
