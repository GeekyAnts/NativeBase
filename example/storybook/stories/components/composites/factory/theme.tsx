import React from 'react';
import { NBFactory } from 'native-base';
import { View } from 'react-native';

export default function () {
  const NBFactoryView = NBFactory(View, {
    baseStyle: {
      bg: 'cyan.300',
      borderRadius: 'md',
    },
  });
  return <NBFactoryView height={50} width={50} />;
}
