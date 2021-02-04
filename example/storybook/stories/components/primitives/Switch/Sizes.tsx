import React from 'react';
import { Switch, VStack } from 'native-base';

export default function () {
  return (
    <VStack space={4}>
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </VStack>
  );
}
