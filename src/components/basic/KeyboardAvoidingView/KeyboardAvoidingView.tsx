import React, { forwardRef } from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledBox } from '../../../utils/styled';
import type { IKeyboardAvoidingViewProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyledKeyboardAvoidingView: any = makeStyledBox(RNKeyboardAvoidingView);

export const KeyboardAvoidingView = forwardRef(
  (props: IKeyboardAvoidingViewProps, ref: any) => {
    const { ...resolvedProps } = usePropsResolution(
      'KeyboardAvoidingView',
      props
    );
    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(props)) {
      return null;
    }
    return <StyledKeyboardAvoidingView {...resolvedProps} ref={ref} />;
  }
);
