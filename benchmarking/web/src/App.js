import './App.css';
// import {NativeBaseProvider, Box} from 'native-base';
import {ChakraProvider, Box} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box>hii</Box>
    </ChakraProvider>
  );
}

export default App;
