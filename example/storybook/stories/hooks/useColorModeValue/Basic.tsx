import React from 'react';
import {
  NativeBaseProvider,
  useColorMode,
  Text,
  Button,
  Center,
  Box,
  useColorModeValue,
} from 'native-base';

function UseColorMode() {
  const { toggleColorMode } = useColorMode();
  return (
    <Center>
      <Box
        p="4"
        flex="1"
        bg={useColorModeValue('warmGray.50', 'coolGray.800')}
        maxW="300"
        w="100%"
      >
        <Text fontSize="lg" display="flex" mb={20}>
          The active color mode is{' '}
          <Text bold fontSize="18px">
            {useColorModeValue('Light', 'Dark')}
          </Text>
        </Text>
        <Button onPress={toggleColorMode}>Toggle</Button>
      </Box>
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
