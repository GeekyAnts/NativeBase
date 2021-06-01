import React from 'react';
import { Tag, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Tag variant="solid" rounded={100} _text={{ color: 'white' }}>
      <Icon as={MaterialIcons} name="menu" color="white" mr={1} size="sm" />
      Menu
    </Tag>
  );
};
