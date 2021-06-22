import React, { forwardRef } from 'react';
import { View as RNView } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledBox } from '../../../utils/styled';
import type { IViewProps } from './types';

const StyledView: any = makeStyledBox(RNView);

export const View = forwardRef((props: IViewProps, ref: any) => {
  const { ...resolvedProps } = usePropsResolution('View', props);

  return <StyledView {...resolvedProps} ref={ref} />;
});
