import React from 'react';
import { Button, VStack, Icon } from 'native-base';
import { mode } from '../../../../../../src/theme/tools';

export default function (props: any) {
  return (
    <VStack space={4}>
      <Button
        startIcon={
          <Icon name="menu" size={6} type="MaterialIcons" color={'default'} />
        }
      >
        Menu
      </Button>
      <Button
        endIcon={
          <Icon name="menu" size={6} type="MaterialIcons" color={'secondary'} />
        }
        colorScheme="secondary"
      >
        Menu
      </Button>
    </VStack>
  );
}
