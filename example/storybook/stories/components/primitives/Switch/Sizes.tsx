import React from 'react';
import { Switch, VStack, Heading } from 'native-base';

export default function () {
  return (
    <VStack space={4} alignItems="center">
      <Heading>Switch Sizes</Heading>
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </VStack>
  );
}
