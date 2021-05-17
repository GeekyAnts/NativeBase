import React from 'react';
import {
  NativeBaseProvider,
  Button,
  extendTheme,
  Center,
  VStack,
} from 'native-base';

export const Example = () => {
  const theme = extendTheme({
    components: {
      Button: {
        variants: {
          rounded: ({ colorScheme }: any) => {
            return {
              bg: `${colorScheme}.500`,
              rounded: 'full',
            };
          },
        },
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Center flex={1}>
        <VStack space={2}>
          <Button colorScheme="emerald">Default Button</Button>
          <Button colorScheme="emerald" variant="rounded">
            Rounded Button
          </Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
