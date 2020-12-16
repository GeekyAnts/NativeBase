import React from 'react';
import { Switch, HStack, Text } from 'native-base';

export default function () {
  return (
    <HStack>
      <Text>Enable email alerts?</Text>
      <Switch />
    </HStack>
  );
}
