import React from 'react';
import { VStack, Image } from 'native-base';
export function Example() {
  return (
    <VStack space={2} alignItems="center">
      {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
        <Image
          size={size}
          resizeMode="cover"
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg',
          }}
          alt={'Alternate Text ' + size}
        />
      ))}
    </VStack>
  );
}
