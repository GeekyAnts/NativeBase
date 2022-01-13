import React from 'react';
import { Badge, HStack } from 'native-base';

export function Example() {
  return (
    <HStack space={4} mx={{ base: 'auto', md: 0 }}>
      <Badge colorScheme="success">SUCCESS</Badge>
      <Badge colorScheme="danger">DANGER</Badge>
      <Badge colorScheme="info">INFO</Badge>
      <Badge colorScheme="coolGray">DARK</Badge>
    </HStack>
  );
}
