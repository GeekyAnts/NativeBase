import React, { forwardRef } from 'react';
import { View as RNView } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/makeStyledComponent';
import type { IViewProps } from './types';

const StyledView: any = makeStyledComponent(RNView);

export const View = forwardRef((props: IViewProps, ref: any) => {
  const { ...resolvedProps } = usePropsResolution('View', props);

  return <StyledView {...resolvedProps} ref={ref} />;
});
