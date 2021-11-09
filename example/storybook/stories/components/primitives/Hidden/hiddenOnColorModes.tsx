import React from 'react';
import { Hidden, Text, Button, Box, useColorMode } from 'native-base';

export function ColorModeExample() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        colorScheme={colorMode === 'light' ? 'blue' : 'red'}
        onPress={() => {
          toggleColorMode();
        }}
      >
        Change mode
      </Button>
      <Hidden colorMode="light">
        <Box bg="yellow.400" p="2" mt="5">
          <Text>This text will be hidden on light mode</Text>
        </Box>
      </Hidden>
      <Hidden colorMode="dark">
        <Box bg="green.400" p="2" mt="5">
          <Text>This text will be hidden on dark mode</Text>
        </Box>
      </Hidden>
    </>
  );
}
