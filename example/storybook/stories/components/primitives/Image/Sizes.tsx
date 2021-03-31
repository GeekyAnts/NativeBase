import React from 'react';
import { HStack, Image } from 'native-base';
export default function () {
  return (
    <HStack alignItems="center" space={2}>
      <Image
        size={12}
        resizeMode="cover"
        source={{
          uri:
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        }}
        alt="nativebase"
      />
      <Image
        size={20}
        resizeMode="cover"
        source={{
          uri:
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        }}
        alt="nativebase"
      />
      <Image
        size={32}
        source={{
          uri:
            'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        }}
        alt="nativebase"
      />
    </HStack>
  );
}
