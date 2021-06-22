import React from 'react';
import { NativeBaseProvider, Text, Box } from 'native-base';
function MyComponent() {
  return (
    // This would look different on devices with different insets
    <Box bg="teal.400" height={200} width={200} safeAreaTop>
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
