import React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeBaseProvider, Box} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Box>hi</Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
