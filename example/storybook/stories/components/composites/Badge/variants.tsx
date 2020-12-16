import React from 'react';
import { Badge, HStack } from 'native-base';

export default function () {
  return (
    <HStack>
      <Badge mx={2} colorScheme="success" variant="solid">
        SOLID
      </Badge>
      <Badge mx={2} colorScheme="success">
        SUBTLE
      </Badge>
      <Badge mx={2} colorScheme="success" variant="outline">
        OUTLINE
      </Badge>
    </HStack>
  );
}
