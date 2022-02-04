import React from 'react';
import { Center, Image } from 'native-base';
export function Example() {
  return (
    <Center>
      <Image
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
        size="xl"
      />
    </Center>
  );
}
