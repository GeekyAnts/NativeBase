import React from 'react';
import { Image } from 'native-base';
export default function () {
  return (
    <Image
      size={150}
      alt="nativebase"
      borderRadius={100}
      source={{
        uri: 'https://-page-icon.png',
        // uri: 'https://nativebase.io/assets/img/front-page-icon.png',
      }}
      fallbackSource={{
        uri: 'https://www.w3schools.com/css/img_lights.jpg',
      }}
    />
  );
}
