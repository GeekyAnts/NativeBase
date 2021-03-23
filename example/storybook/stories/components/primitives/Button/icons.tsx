import React from 'react';
import { Button, VStack, Icon } from 'native-base';

export default function () {
  return (
    <VStack space={4}>
      <Button startIcon={<Icon name="menu" type="MaterialIcons" size={4} />}>
        Menu
      </Button>
      <Button endIcon={<Icon name="menu" type="MaterialIcons" size={4} />}>
        Menu
      </Button>
    </VStack>
  );
}
