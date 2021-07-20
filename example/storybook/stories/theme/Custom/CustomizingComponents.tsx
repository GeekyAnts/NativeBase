import React from 'react';
import { NativeBaseProvider, themeTools, extendTheme } from 'native-base';
import { Content } from './Content';

export const Example = () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      custom: {
        100: '#f7c',
        200: '#faa',
        300: '#1ac',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
    components: {
      Button: {
        // Can simply pass default props to change default behaviour of components.
        defaultProps: {
          colorScheme: 'red',
        },
      },
      Checkbox: {
        defaultProps: {
          size: 'lg',
          colorScheme: 'amber',
        },
      },
      Avatar: {
        baseStyle: {
          borderRadius: 'sm',
        },
      },
      Heading: {
        // Can pass also function, giving you access themeingTools
        baseStyle: (props: any) => {
          return {
            color: themeTools.mode('red.300', 'blue.300')(props),
            fontWeight: 'normal',
          };
        },
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Content />
    </NativeBaseProvider>
  );
};
