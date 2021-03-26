import { Fab, Icon, Text } from 'native-base';
import React from 'react';

export default function () {
  return (
    <Fab
      placement="top-left"
      icon={<Icon name="plus" color="white" type="AntDesign" />}
      label={
        <Text color="white" fontSize="sm">
          Click
        </Text>
      }
    />
  );
}
