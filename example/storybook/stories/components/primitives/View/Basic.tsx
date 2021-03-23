import React from 'react';
import { View, Text } from 'native-base';

export default function () {
  return (
    <View
      bg="primary.400"
      justifyContent="center"
      alignItems="center"
      height={200}
      width={200}
    >
      <Text color="white">This is a View</Text>
    </View>
  );
}
