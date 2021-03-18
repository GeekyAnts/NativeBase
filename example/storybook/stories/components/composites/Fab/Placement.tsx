import { Fab, Icon, Text } from 'native-base';
import React from 'react';

export default function () {
  return (
    <Fab
      bg="lime.200"
      placement="top-left"
      icon={<Icon name="plus" type="AntDesign" />}
      label={<Text fontSize="sm">Click</Text>}
    />
  );
}
