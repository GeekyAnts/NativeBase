import React from 'react';
import { HStack, NativeBaseProvider, View, Text } from 'native-base';
function MyComponent() {
  return (
    <HStack bg="indigo.400" height={500} width={400}>
      <View
        bg="teal.400"
        height={200}
        width={200}
        // right={0}
        safeArea
        // safeAreaX
        // pt={6}
        // pr={4}
        // p={2}
      >
        <Text>Test Text</Text>
      </View>
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
