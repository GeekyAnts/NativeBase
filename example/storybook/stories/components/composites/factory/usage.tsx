import React from 'react';
import { NBFactory } from 'native-base';
import { Image, View, TouchableOpacity, Text } from 'react-native';

export default function () {
  const NBFactoryImage = NBFactory(Image);
  const NBFactoryView = NBFactory(View);
  const NBTouchable = NBFactory(TouchableOpacity);
  const NBText = NBFactory(Text);
  return (
    <>
      <NBTouchable>
        <NBFactoryView bg="teal.200" height={50} width={50} />
        <NBText>Hey</NBText>
      </NBTouchable>
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
