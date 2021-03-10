import React from 'react';
import { Factory, themeTools } from 'native-base';
import { View } from 'react-native';

export default function () {
  const FactoryView = Factory(View, {
    baseStyle: (props: any) => {
      return {
        bg: themeTools.mode('rose.500', 'cyan.300')(props),
        borderRadius: 'md',
      };
    },
  });
  return <FactoryView height={50} width={50} />;
}
