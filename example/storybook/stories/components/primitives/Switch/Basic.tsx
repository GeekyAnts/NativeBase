import React from 'react';
import { Switch, HStack, Text } from 'native-base';

export default function () {
  return (
    <HStack alignItems="center" space={8}>
      <Text fontSize="lg">Setting 1</Text>
      <Switch />
    </HStack>
  );
}
