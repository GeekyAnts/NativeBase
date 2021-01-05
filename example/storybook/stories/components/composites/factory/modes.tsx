import React from 'react';
import { NBFactory, themeTools } from 'native-base';
import { View } from 'react-native';

export default function () {
  const NBFactoryView = NBFactory(View, {
    baseStyle: (props: any) => {
      return {
        bg: themeTools.mode('rose.500', 'cyan.300')(props),
        borderRadius: 'md',
      };
    },
  });
  return <NBFactoryView height={50} width={50} />;
}
