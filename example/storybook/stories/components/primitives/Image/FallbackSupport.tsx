import React from 'react';
import { Image, Center } from 'native-base';
export function Example() {
  return (
    <Center>
      <Image
        size={150}
        alt="fallback text"
        borderRadius={100}
        source={{
          uri: 'https://-page-icon.png',
        }}
        fallbackSource={{
          uri: 'https://www.w3schools.com/css/img_lights.jpg',
        }}
      />
    </Center>
  );
}
