import React from 'react';
import { Tag, Icon } from 'native-base';

export default function () {
  return (
    <Tag variant="solid" rounded={100} _text={{ color: 'white' }}>
      <Icon name={'menu'} type="MaterialIcons" color="white" mr={1} size="sm" />
      Menu
    </Tag>
  );
}
