import React from 'react';
import { Badge, HStack } from 'native-base';

export default function () {
  return (
    <HStack>
      <Badge m={2} colorScheme="success">
        SUCCESS
      </Badge>
      <Badge m={2} colorScheme="danger">
        DANGER
      </Badge>
      <Badge m={2} colorScheme="info">
        INFO
      </Badge>
      <Badge m={2} colorScheme="dark">
        DARK
      </Badge>
    </HStack>
  );
}
