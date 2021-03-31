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
        uri:
          'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      }}
    />
  );
}
