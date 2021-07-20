import React from 'react';
import { Factory } from 'native-base';
import { View } from 'react-native';

export const Example = () => {
  const FactoryView = Factory(View);
  return <FactoryView bg="emerald.400" borderRadius="sm" size={16} />;
};
