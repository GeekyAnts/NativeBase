import React from 'react';
import { Badge, HStack, Button } from 'native-base';

export default function () {
  return (
    <HStack>
      <Button colorScheme="teal">
        Notifications
        <Badge ml={2}>10</Badge>
      </Button>
    </HStack>
  );
}
