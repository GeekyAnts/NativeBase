import React from 'react';
import { Badge, HStack, VStack } from 'native-base';

export default function () {
  return (
    <VStack>
      {['solid', 'outline', 'subtle'].map((key: any) => (
        <HStack key={key}>
          <Badge m={2} variant={key}>
            DEFAULT
          </Badge>
          <Badge m={2} colorScheme="success" variant={key}>
            SUCCESS
          </Badge>
          <Badge m={2} colorScheme="danger" variant={key}>
            DANGER
          </Badge>
          <Badge m={2} colorScheme="info" variant={key}>
            INFO
          </Badge>
        </HStack>
      ))}
    </VStack>
  );
}
