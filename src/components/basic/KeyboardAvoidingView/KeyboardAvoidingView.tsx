import React, { forwardRef } from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { IKeyboardAvoidingViewProps } from './types';

const StyledKeyboardAvoidingView: any = makeStyledComponent(
  RNKeyboardAvoidingView
);

export const KeyboardAvoidingView = forwardRef(
  (props: IKeyboardAvoidingViewProps, ref: any) => {
    const { ...resolvedProps } = usePropsResolution(
      'KeyboardAvoidingView',
      props,
      {}
    );

    return <StyledKeyboardAvoidingView {...resolvedProps} ref={ref} />;
  }
);
