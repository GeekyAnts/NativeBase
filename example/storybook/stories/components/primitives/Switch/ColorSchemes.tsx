import React from 'react';
import { Switch, VStack, Heading } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      <Heading>Switch ColorScheme</Heading>
      <Switch colorScheme="primary" />
      <Switch colorScheme="secondary" />
      <Switch colorScheme="emerald" />
    </VStack>
  );
};
