import React from 'react';
import { Factory } from 'native-base';
import { Image, View, TouchableOpacity, Text } from 'react-native';

export default function () {
  const FactoryImage = Factory(Image);
  const FactoryView = Factory(View);
  const NBTouchable = Factory(TouchableOpacity);
  const NBText = Factory(Text);
  return (
    <>
      <NBTouchable>
        <FactoryView bg="teal.200" height={50} width={50} />
        <NBText>Hey</NBText>
      </NBTouchable>
      <FactoryImage
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
