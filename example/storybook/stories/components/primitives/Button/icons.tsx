import React from 'react';
import { Button, VStack, Icon, useColorMode } from 'native-base';

export default function () {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack space={4}>
      <Button
        startIcon={
          <Icon
            name="menu"
            type="MaterialIcons"
            size={4}
            color={colorMode === 'dark' ? 'black' : 'white'}
          />
        }
      >
        Menu
      </Button>
      <Button
        endIcon={
          <Icon
            name="menu"
            type="MaterialIcons"
            size={4}
            color={colorMode === 'dark' ? 'black' : 'white'}
          />
        }
      >
        Menu
      </Button>
    </VStack>
  );
}
