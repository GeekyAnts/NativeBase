import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export const Button: React.SFC<TouchableOpacityProps> = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};
