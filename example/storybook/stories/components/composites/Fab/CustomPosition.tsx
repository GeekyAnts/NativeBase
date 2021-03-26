import { Fab, Icon } from 'native-base';
import React from 'react';

export default function () {
  return (
    <Fab
      bottom={4}
      right={24}
      icon={<Icon name="plus" color="white" type="AntDesign" />}
    />
  );
}
