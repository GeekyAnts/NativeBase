import React from 'react';
import { Badge, HStack, Button } from 'native-base';

export function Example() {
  return (
    <HStack>
      <Button
        endIcon={
          <Badge colorScheme="secondary" ml={1} rounded="md">
            10
          </Badge>
        }
      >
        Notifications
      </Button>
    </HStack>
  );
}
