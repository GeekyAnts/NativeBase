import React from 'react';
import { useSx } from 'native-base';
import type { StyledProps } from 'native-base';
import { View, Text } from 'react-native';

const textStyle: StyledProps = {
  color: ['orange.900', 'white', 'black'],
  textAlign: 'center',
  size: '12',
};

export const Example = () => {
  const sx = useSx();
  console.log('Size', sx(textStyle));
  return (
    <View
      style={[
        sx({
          p: 2,
          bg: ['blue.300', 'violet.400', 'red.400'],
          width: 48,
          height: 48,
        }),
        { justifyContent: 'center', alignItems: 'center' },
      ]}
    >
      <Text style={sx(textStyle)}>New Feat useSx in NativeBase</Text>
    </View>
  );
};
