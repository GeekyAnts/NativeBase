import { Fab, Icon, Text } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Fab
      placement="top-left"
      icon={<Icon color="white" as={<AntDesign name="plus" />} size={4} />}
      label={
        <Text color="white" fontSize="sm">
          BUTTON
        </Text>
      }
    />
  );
};
