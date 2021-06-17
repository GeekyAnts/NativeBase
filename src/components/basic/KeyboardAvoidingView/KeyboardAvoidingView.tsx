import React from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledBox } from '../../../utils/styled';
import type { IKeyboardAvoidingViewProps } from './types';

const StyledKeyboardAvoidingView: any = makeStyledBox(RNKeyboardAvoidingView);

export const KeyboardAvoidingView = ({
  ...props
}: IKeyboardAvoidingViewProps) => {
  const { ...resolvedProps } = usePropsResolution('View', props);

  return <StyledKeyboardAvoidingView {...resolvedProps} />;
};
