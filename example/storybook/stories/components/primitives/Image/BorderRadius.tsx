import React from 'react';
import { Image } from 'native-base';
export default function () {
  return (
    <Image
      size={150}
      resizeMode={'contain'}
      alt="nativebase"
      borderRadius={100}
      source={{
        uri: 'https://nativebase.io/assets/img/front-page-icon.png',
      }}
    />
  );
}
