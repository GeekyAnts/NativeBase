import React from 'react';
import { Text, extendTheme, Center, NativeBaseProvider } from 'native-base';

export const Example = () => {
  const theme = extendTheme({
    components: {
      Text: {
        baseStyle: {
          color: 'emerald.400',
        },
        defaultProps: { size: 'lg' },
        sizes: {
          xl: { fontSize: '64px' },
          lg: { fontSize: '32px' },
          md: { fontSize: '16px' },
          sm: { fontSize: '12px' },
        },
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Center flex={1}>
        <Text>NativeBase</Text>
      </Center>
    </NativeBaseProvider>
  );
};
