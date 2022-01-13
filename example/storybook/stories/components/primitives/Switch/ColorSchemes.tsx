import React from 'react';
import { Switch, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      <Switch defaultIsChecked colorScheme="primary" />
      <Switch defaultIsChecked colorScheme="secondary" />
      <Switch defaultIsChecked colorScheme="emerald" />
    </VStack>
  );
};
