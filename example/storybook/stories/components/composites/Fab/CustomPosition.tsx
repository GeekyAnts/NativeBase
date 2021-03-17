import { Fab, Icon } from 'native-base';
import React from 'react';

export default function () {
  return (
    <Fab
      bg="purple.200"
      bottom={4}
      right={24}
      icon={<Icon name="plus" type="AntDesign" />}
    />
  );
}
