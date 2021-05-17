import React from 'react';
import { Switch, HStack, Text } from 'native-base';

export const Example = () => {
  return (
    <HStack space={8} alignItems="center">
      <Text fontSize="lg">Accessibility</Text>
      <Switch
        accessibilityLabel="switch-accessible"
        accessibilityHint="turn on or off"
      />
    </HStack>
  );
};
