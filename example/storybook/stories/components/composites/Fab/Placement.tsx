import { Fab, Icon, Text, Box } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Box h={400} w="100%">
      <Fab
        placement="top-right"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size={4} />}
        label={
          <Text color="white" fontSize="sm">
            BUTTON
          </Text>
        }
      />
    </Box>
  );
};
