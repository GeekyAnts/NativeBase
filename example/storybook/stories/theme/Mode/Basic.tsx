import React from 'react';
import { NativeBaseProvider, extendTheme, themeTools } from 'native-base';
import { Content } from './Content';

const customTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: (props: any) => {
        return {
          color: themeTools.mode('red.300', 'blue.300')(props),
          fontWeight: 'bold',
        };
      },
    },
  },
});
export const Example = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Content />
    </NativeBaseProvider>
  );
};
