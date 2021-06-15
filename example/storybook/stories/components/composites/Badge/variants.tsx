//@ts-nocheck
import React from 'react';
import { Badge, HStack, VStack } from 'native-base';

export function Example() {
  return (
    <HStack space={{ base: 2, md: 4 }} mx={{ base: 'auto', md: 0 }}>
      {['solid', 'outline', 'subtle'].map((key) => (
        <VStack key={key} space={{ base: 1, md: 4 }}>
          <Badge variant={key}>DEFAULT</Badge>
          <Badge colorScheme="success" variant={key}>
            SUCCESS
          </Badge>
          <Badge colorScheme="danger" variant={key}>
            DANGER
          </Badge>
          <Badge colorScheme="info" variant={key}>
            INFO
          </Badge>
        </VStack>
      ))}
    </HStack>
  );
}
