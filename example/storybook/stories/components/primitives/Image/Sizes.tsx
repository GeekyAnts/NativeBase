import React from 'react';
import { HStack, Image } from 'native-base';
export default function () {
  return (
    <HStack alignItems="center">
      <Image
        size={12}
        resizeMode="cover"
        source={{
          uri: 'https://nativebase.github.io/img/native-base-icon.png',
        }}
        alt="nativebase"
      />
      <Image
        size={20}
        resizeMode="cover"
        source={{
          uri: 'https://nativebase.github.io/img/native-base-icon.png',
        }}
        alt="nativebase"
      />
      <Image
        size={32}
        source={{
          uri: 'https://nativebase.github.io/img/native-base-icon.png',
        }}
        alt="nativebase"
      />
    </HStack>
  );
}
