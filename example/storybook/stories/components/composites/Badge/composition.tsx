import React from 'react';
import { Badge, Button } from 'native-base';

export function Example() {
  return (
    <Button
      endIcon={
        <Badge colorScheme="secondary" ml={1} rounded="md">
          10
        </Badge>
      }
      mx={{ base: 'auto', md: 0 }}
    >
      Notifications
    </Button>
  );
}
