import React from 'react';
import { Switch, HStack, Text } from 'native-base';

export const Example = () => {
  return (
    <HStack alignItems="center" space={4}>
      <Text>Bluetooth</Text>
      <Switch size="sm" />
    </HStack>
  );
};
