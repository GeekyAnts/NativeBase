import React from 'react';
import { NBFactory } from 'native-base';
import { Image, View } from 'react-native';

export default function () {
  const NBFactoryImage = NBFactory(Image);
  const NBFactoryView = NBFactory(View);
  return (
    <>
      <NBFactoryView bg="teal.200" height={50} width={50} />
      <NBFactoryImage
        p={10}
        height={50}
        width={50}
        source={{
          uri: 'https://nativebase.github.io/img/native-base-icon.png',
        }}
      />
    </>
  );
}
