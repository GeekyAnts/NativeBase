import React from 'react';
import { HStack, Image } from 'native-base';
export default function () {
  return (
    <HStack alignItems="center" space={2}>
      <Image
        size={12}
        resizeMode="cover"
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
      />
      <Image
        size={20}
        resizeMode="cover"
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
      />
      <Image
        size={32}
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
      />
    </HStack>
  );
}
