import React from 'react';
import { Switch, VStack } from 'native-base';

export default function () {
  return (
    <VStack space={4}>
      <Switch />
      <Switch offTrackColor="rose.200" onTrackColor="lime.200" />
      <Switch offThumbColor="rose.200" onThumbColor="lime.200" />
    </VStack>
  );
}
