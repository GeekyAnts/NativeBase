import { Fab, Icon, Box, Center } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Center>
      <Box
        height="200"
        w="400"
        shadow="2"
        rounded="lg"
        _dark={{ bg: 'coolGray.200:alpha.20' }}
        _light={{ bg: 'coolGray.200:alpha.20' }}
      >
        <Fab
          renderInPortal={false}
          shadow={2}
          size="sm"
          icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
        />
      </Box>
    </Center>
  );
};
