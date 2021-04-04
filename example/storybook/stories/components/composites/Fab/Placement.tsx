import { Fab, Icon, Text } from 'native-base';
import React from 'react';

export default function () {
  return (
    <Fab
      placement="top-left"
      icon={<Icon name="plus" color="white" type="AntDesign" size={4} />}
      label={
        <Text color="white" fontSize="sm">
          BUTTON
        </Text>
      }
    />
  );
}
