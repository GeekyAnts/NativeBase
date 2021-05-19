import React from 'react';
import { Switch, VStack, Heading } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      <Heading>Switch Track & Thumb Color</Heading>
      <Switch />
      <Switch offTrackColor="rose.200" onTrackColor="lime.200" />
      <Switch offThumbColor="rose.200" onThumbColor="lime.200" />
    </VStack>
  );
};
