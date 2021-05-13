import React from 'react';
import { Image } from 'native-base';
export function Example() {
  return (
    <Image
      size={150}
      alt="fallback text"
      borderRadius={100}
      source={{
        uri: 'https://-page-icon.png',
        // uri: 'https://wallpaperaccess.com/full/317501.jpg',
      }}
      fallbackSource={{
        uri: 'https://www.w3schools.com/css/img_lights.jpg',
      }}
    />
  );
}
