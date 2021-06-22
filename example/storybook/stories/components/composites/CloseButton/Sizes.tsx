import React from 'react';
import { CloseButton, HStack } from 'native-base';
export const Example = () => {
  return (
    <HStack space="md">
      <CloseButton size="sm" color="teal.200" />
      <CloseButton size="md" color="red.200" />
      <CloseButton size="lg" color="blue.200" />
    </HStack>
  );
};
