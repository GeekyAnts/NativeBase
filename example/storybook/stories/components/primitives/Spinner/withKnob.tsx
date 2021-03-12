import React from 'react';
import { Spinner, View } from 'native-base';
import { color, select } from '@storybook/addon-knobs';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Spinner
        size={select('size', ['sm', 'lg'], 'lg')}
        color={color('color', 'green.400')}
      />
    </View>
  );
}
