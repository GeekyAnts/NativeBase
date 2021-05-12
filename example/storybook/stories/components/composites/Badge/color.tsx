import React from 'react';
import { Badge, HStack } from 'native-base';

export function Example() {
  return (
    <HStack space={2}>
      <Badge colorScheme="success">SUCCESS</Badge>
      <Badge colorScheme="danger">DANGER</Badge>
      <Badge colorScheme="info">INFO</Badge>
      <Badge colorScheme="dark">DARK</Badge>
    </HStack>
  );
}
