import React from 'react';
import { Switch, VStack, Heading } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      <Heading textAlign="center" mb="10">
        Track & Thumb color
      </Heading>
      <Switch />
      <Switch
        offTrackColor="orange.100"
        onTrackColor="orange.200"
        onThumbColor="orange.500"
        offThumbColor="orange.50"
      />
      <Switch
        offTrackColor="indigo.100"
        onTrackColor="indigo.200"
        onThumbColor="indigo.500"
        offThumbColor="indigo.50"
      />
    </VStack>
  );
};
