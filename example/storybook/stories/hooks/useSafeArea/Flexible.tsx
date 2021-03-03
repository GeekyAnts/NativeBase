import React from 'react';
import { NativeBaseProvider, View, Text } from 'native-base';
function MyComponent() {
  return (
    // This would look different on devices with different insets
    <View bg="teal.400" height={200} width={200} safeArea>
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
