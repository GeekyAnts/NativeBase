import React from 'react';
import { Factory } from 'native-base';
import { View } from 'react-native';

export default function () {
  const FactoryView = Factory(View, {
    baseStyle: {
      bg: 'cyan.300',
      borderRadius: 'md',
    },
  });
  return <FactoryView height={50} width={50} />;
}
