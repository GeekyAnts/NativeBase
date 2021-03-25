import React from 'react';
import { Switch, VStack } from 'native-base';

export default function () {
  return (
    <VStack space={4}>
      <Switch colorScheme="primary" />
      <Switch colorScheme="secondary" />
      <Switch colorScheme="emerald" />
    </VStack>
  );
}
