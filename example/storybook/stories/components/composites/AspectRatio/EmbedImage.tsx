import React from 'react';
import { AspectRatio, Image } from 'native-base';
export default function () {
  return (
    <AspectRatio ratio={0.5} height={200}>
      <Image
        resizeMode="cover"
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        alt="nativebase tiny logo"
      />
    </AspectRatio>
  );
}
