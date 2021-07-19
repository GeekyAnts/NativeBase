import { Fab, Icon, NativeBaseProvider, Box } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export const Example = () => {
  return (
    <NativeBaseProvider>
      <Box position="relative" w="100%" h={200}>
        <Fab
          right={70}
          bottom={50}
          icon={<Icon color="white" as={<AntDesign name="plus" />} />}
        />
      </Box>
    </NativeBaseProvider>
  );
};
