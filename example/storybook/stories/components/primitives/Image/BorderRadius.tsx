import React from 'react';
import { Image } from 'native-base';
export function Example() {
  return (
    <Image
      size={150}
      resizeMode={'contain'}
      borderRadius={100}
      source={{
        uri: 'https://wallpaperaccess.com/full/317501.jpg',
      }}
      alt="Alternate Text"
    />
  );
}
