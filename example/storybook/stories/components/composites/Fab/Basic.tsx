import { Fab, Icon, Text } from 'native-base';
import React from 'react';

export default function () {
  return (
    <>
      <Fab
        placement={'bottomRight'}
        bg="teal.200"
        icon={<Icon name="plus" type="AntDesign" />}
      />
      <Fab
        bg="teal.200"
        position="absolute"
        bottom={4}
        right={24}
        icon={<Icon name="plus" type="AntDesign" />}
        label={<Text fontSize="sm">Click</Text>}
      />
    </>
  );
}
