import React from 'react';
import { NativeBaseProvider, themeTools, extendTheme } from 'native-base';
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
      amber: {
        400: '#4B5563',
        500: '#E7E5E4',
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
          colorScheme: 'primary',
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
          borderRadius: 'md',
        },
      },
      Heading: {
        // Can pass also function, giving you access themeingTools
        baseStyle: (props: any) => {
          return {
            color: themeTools.mode('coolGray.800', 'warmGray.50')(props),
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
