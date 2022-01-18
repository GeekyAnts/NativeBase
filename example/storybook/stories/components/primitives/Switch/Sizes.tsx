import React from 'react';
import { Switch, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </VStack>
  );
};
