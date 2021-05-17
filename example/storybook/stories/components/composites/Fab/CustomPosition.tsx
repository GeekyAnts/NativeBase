import { Fab, Icon } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Fab
      bottom={4}
      right={24}
      icon={<Icon color="white" as={<AntDesign name="plus" />} />}
    />
  );
};
