import React from 'react';
import { IconButton, Icon } from 'native-base';
export default function () {
  return (
    <IconButton
      colorScheme="blue"
      variant="outline"
      icon={<Icon name={'search'} />}
    />
  );
}
