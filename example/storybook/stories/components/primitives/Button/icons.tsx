import React from 'react';
import { Button, VStack, Icon } from 'native-base';

export default function () {
  return (
    <VStack space={4}>
      <Button
        startIcon={
          <Icon name="menu" size={6} type="MaterialIcons" color="white" />
        }
        colorScheme="indigo"
      >
        Menu
      </Button>
      <Button
        endIcon={
          <Icon name="menu" size={6} type="MaterialIcons" color="white" />
        }
        colorScheme="emerald"
      >
        Menu
      </Button>
    </VStack>
  );
}
