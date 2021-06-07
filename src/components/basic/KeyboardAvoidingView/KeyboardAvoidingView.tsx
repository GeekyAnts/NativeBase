import React from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledBox } from '../../../utils/styled';

const StyledKeyboardAvoidingView: any = makeStyledBox(RNKeyboardAvoidingView);

export const KeyboardAvoidingView = ({ children, ...props }: any) => {
  const { _contentContainerStyle, ...resolvedProps } = usePropsResolution(
    'View',
    props
  );

  return (
    <StyledKeyboardAvoidingView {...resolvedProps}>
      {children}
    </StyledKeyboardAvoidingView>
  );
};
