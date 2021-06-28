import { Fab, Icon, Box, NativeBaseProvider } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import nativebaseConfig from '../../../../../nativebase.config';

export const Example = () => {
  return (
    <Box position="relative" h={100} w="100%">
      <NativeBaseProvider config={nativebaseConfig}>
        <Fab
          position="absolute"
          size="sm"
          icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        />
      </NativeBaseProvider>
    </Box>
  );
};
