import React from 'react';
import {
  NativeBaseProvider,
  useColorMode,
  Text,
  Button,
  Center,
  Box,
} from '@bilwifi/native-base';

function UseColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center>
      <Box
        p="4"
        flex="1"
        maxW="300"
        mt={10}
        w="100%"
        bg={colorMode === 'dark' ? 'coolGray.800' : 'warmGray.50'}
        safeArea
      >
        <Text fontSize="lg" display="flex" mb="20">
          The active color mode is{' '}
          <Text bold fontSize="lg">
            {colorMode}
          </Text>
        </Text>
        <Button onPress={toggleColorMode} h={10}>
          Toggle
        </Button>
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
