import React from 'react';
import { Badge, HStack, Button, IconButton, Icon } from 'native-base';

export default function () {
  return (
    <HStack>
      <Button colorScheme="teal">
        Notifications
        <Badge ml={2}>10</Badge>
      </Button>
      {/* <IconButton
        colorScheme="blue"
        variant="outline"
        icon={<Icon name={'search'} />}
      >
        <Badge ml={2}>10</Badge>
      </IconButton> */}
    </HStack>
  );
}
