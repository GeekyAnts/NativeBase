import { Fab, Icon, NativeBaseProvider, Box } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import nativebaseConfig from '../../../../../nativebase.config';

export const Example = () => {
  return (
    <Box position="relative" w="100%" h={200}>
      <NativeBaseProvider config={nativebaseConfig}>
        <Fab
          right={70}
          bottom={50}
          icon={<Icon color="white" as={<AntDesign name="plus" />} />}
        />
      </NativeBaseProvider>
    </Box>
  );
};
