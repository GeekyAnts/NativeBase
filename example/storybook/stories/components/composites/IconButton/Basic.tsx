import React from 'react';
import { IconButton, Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

export const Example = () => {
  return (
    <IconButton
      variant="solid"
      _icon={{
        color: 'red.500',
      }}
      _hover={{
        bg: 'red.900',
        _icon: {
          color: 'blue.500',
        },
      }}
      icon={<Icon size="md" as={<AntDesign name="search1" />} color="white" />}
    />
  );
};
