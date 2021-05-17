import React from 'react';
import { NativeBaseProvider, Box, Text, useSafeArea } from 'native-base';
function MyComponent() {
  const safeAreaProps = useSafeArea({ safeAreaTop: true, pt: 2 });
  return (
    // This would look same on all devices
    <Box bg="teal.400" height={200} width={200} {...safeAreaProps}>
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
