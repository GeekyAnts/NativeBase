import React from 'react';
import { Tag, Icon } from 'native-base';

export default function () {
  return (
    <Tag colorScheme="green" variant="solid" rounded={100}>
      <Icon name={'menu'} type="MaterialIcons" color="white" mr={1} />
      Menu
    </Tag>
  );
}
