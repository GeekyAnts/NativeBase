import React from 'react';
import { HStack, NativeBaseProvider, Box } from 'native-base';

function MyComponent() {
  return (
    <HStack bg="indigo.400" height={500} width={400}>
      <Box
        bg="teal.400"
        height={200}
        width={200}
        // right={0}
        safeAreaTop
        // safeAreaLeft
        // safeAreaX
        // pt={6}
        // pr={4}
        // p={2}
        _text={{ fontWeight: 'bold', fontSize: 'lg' }}
      >
        Hi there
      </Box>
    </HStack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <MyComponent />
    </NativeBaseProvider>
  );
}
