import React from 'react';
import {View} from 'react-native';
import {Box, NativeBaseProvider, extendTheme} from 'native-base';

const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Light',
      },
      200: {
        normal: 'Roboto-Light',
      },
      300: {
        normal: 'Roboto-Light',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Roboto-Bold',
      },
    },
    Merriweather: {
      400: {
        normal: 'Merriweather-Regular',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Merriweather',
    body: 'Roboto',
    mono: 'Roboto',
  },
});

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <NativeBaseProvider theme={theme}>
        <Box _text={{fontWeight: 100}}>hello world</Box>
        <Box _text={{fontFamily: 'heading'}}>hello world</Box>
      </NativeBaseProvider>
    </View>
  );
};

export default App;
