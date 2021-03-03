import React from 'react';
import {
  NativeBaseProvider,
  useColorMode,
  Text,
  Button,
  Center,
  useColorModeValue,
} from 'native-base';

function UseColorMode() {
  const { toggleColorMode } = useColorMode();
  return (
    <Center flex={1} bg={useColorModeValue('white', 'black')}>
      <Text fontSize="lg" display="flex">
        The active color mode is{' '}
        <Text bold>{useColorModeValue('Light', 'Dark')}</Text>
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Center>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <UseColorMode />
    </NativeBaseProvider>
  );
}
