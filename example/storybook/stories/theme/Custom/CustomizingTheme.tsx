import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { Content } from './Content';

export const Example = () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      custom: {
        100: '#f7c',
        200: '#333',
        300: '#1ac',
      },
      // Update existing colors
      amber: {
        400: '#4B5563',
        500: '#E7E5E4',
      },
    },
    fonts: {
      heading: `monospace`,
      body: `monospace`,
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Content />
    </NativeBaseProvider>
  );
};
