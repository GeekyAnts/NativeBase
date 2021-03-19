import React from 'react';
import { Button, VStack, Icon } from 'native-base';
import { mode } from '../../../../../../src/theme/tools';

export default function (props: any) {
  return (
    <VStack space={4}>
      <Button
        startIcon={
          <Icon
            name="menu"
            size={6}
            type="MaterialIcons"
            color={mode('primary.light', 'primary.dark')(props)}
          />
        }
        colorScheme="primary"
      >
        Menu
      </Button>
      <Button
        endIcon={
          <Icon
            name="menu"
            size={6}
            type="MaterialIcons"
            color={mode('secondary.light', 'secondary.dark')(props)}
          />
        }
        colorScheme="secondary"
      >
        Menu
      </Button>
    </VStack>
  );
}
