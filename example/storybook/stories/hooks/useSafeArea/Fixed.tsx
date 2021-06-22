import React from 'react';
import { NativeBaseProvider, Box, Text } from 'native-base';
function MyComponent() {
  return (
    // This would look same on all devices
    <Box bg="teal.400" height={200} width={200} safeAreaTop={8}>
      <Text>NativeBase</Text>
    </Box>
  );
}

export const Example = () => {
  return (
    <NativeBaseProvider>
      <MyComponent />
    </NativeBaseProvider>
  );
};
