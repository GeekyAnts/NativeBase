import React from 'react';
import { TouchableNativeFeedback, TouchableNativeFeedbackProps } from 'react-native';

export const Button: React.SFC<TouchableNativeFeedbackProps> = props => {
  return (
    <TouchableNativeFeedback delayPressIn={0} {...props}>
      {props.children}
    </TouchableNativeFeedback>
  );
};
