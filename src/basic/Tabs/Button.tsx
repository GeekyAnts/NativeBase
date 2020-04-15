import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export const Button: React.SFC<TouchableOpacityProps> = props => {
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};
