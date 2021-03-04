import React from 'react';
import { NativeBaseProvider, View, Text } from 'native-base';
function MyComponent() {
  return (
    // This would look same on all devices
    <View bg="teal.400" height={200} width={200} safeAreaTop={8}>
      <Text>NativeBase</Text>
    </View>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <MyComponent />
    </NativeBaseProvider>
  );
}
