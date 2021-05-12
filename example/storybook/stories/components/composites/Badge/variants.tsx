import React from 'react';
import { Badge, HStack, VStack } from 'native-base';

export function Example() {
  return (
    <VStack space={4}>
      {['solid', 'outline', 'subtle'].map((key: any) => (
        <HStack key={key} space={2}>
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
        </HStack>
      ))}
    </VStack>
  );
}
