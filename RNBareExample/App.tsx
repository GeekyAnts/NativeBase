import React from 'react';
import {NativeBaseProvider, Box, Center} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box
          bg={{
            linearGradient: {
              colors: ['lightBlue.300', 'violet.800'],
              start: [0, 0],
              end: [1, 0],
            },
          }}
          p={12}
          rounded="lg"
          _text={{fontSize: 'md', fontWeight: 'bold', color: 'white'}}>
          This is a Box with Linear Gradient
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default App;
