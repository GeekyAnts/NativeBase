import React from 'react';
import { Switch, VStack, Heading } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      <Heading textAlign="center" mb="10">
        Color Scheme
      </Heading>
      <Switch defaultIsChecked colorScheme="primary" />
      <Switch defaultIsChecked colorScheme="secondary" />
      <Switch defaultIsChecked colorScheme="emerald" />
    </VStack>
  );
};
