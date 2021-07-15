import React from 'react';
import { IconButton, Icon, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

export const Example = () => {
  return (
    <VStack space={4}>
      <IconButton
        colorScheme="red"
        variant="solid"
        icon={<Icon as={AntDesign} name="search1" />}
        _icon={{
          color: 'amber.100',
        }}
      />
      <IconButton
        colorScheme="emerald"
        variant="outline"
        _icon={{
          as: AntDesign,
          name: 'home',
        }}
      />
    </VStack>
  );
};
