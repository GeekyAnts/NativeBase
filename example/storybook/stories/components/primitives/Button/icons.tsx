import React from 'react';
import { Button, HStack, Icon } from 'native-base';

export default function () {
  return (
    <HStack space={2}>
      <Button
        leftIcon={<Icon name="menu" size={6} type="MaterialIcons" />}
        colorScheme="blue"
      >
        Menu
      </Button>
      <Button
        isDisabled
        rightIcon={<Icon name="menu" size={6} type="MaterialIcons" />}
        colorScheme="cyan"
      >
        Menu
      </Button>
    </HStack>
  );
}
