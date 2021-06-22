import React from 'react';
import {
  NativeBaseProvider,
  useColorMode,
  Text,
  Button,
  Center,
} from 'native-base';

function UseColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center flex={1} bg={colorMode === 'dark' ? 'black' : 'white'}>
      <Text fontSize="lg" display="flex">
        The active color mode is <Text bold>{colorMode}</Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Center>
  );
}

export const Example = () => {
  return (
    <NativeBaseProvider>
      <UseColorMode />
    </NativeBaseProvider>
  );
};
