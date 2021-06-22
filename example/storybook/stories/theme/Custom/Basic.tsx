import React from 'react';
import { Heading, VStack, NativeBaseProvider, extendTheme } from 'native-base';

export const Example = () => {
  const theme = extendTheme({
    colors: {
      custom: {
        100: '#f7c',
        200: '#faa',
        300: '#1ac',
      },
    },
    components: {
      Heading: {
        baseStyle: {
          color: 'custom.100',
        },
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <VStack flex={1} justifyContent="center" alignItems="center">
        <Heading> I'm a Heading</Heading>
        <Heading color="custom.300"> I'm a Heading</Heading>
      </VStack>
    </NativeBaseProvider>
  );
};
