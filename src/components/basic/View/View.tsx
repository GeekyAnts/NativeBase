import React, { forwardRef } from 'react';
import { View as RNView } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { IViewProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyledView: any = makeStyledComponent(RNView);

export const View = forwardRef((props: IViewProps, ref: any) => {
  const { ...resolvedProps } = usePropsResolution('View', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <StyledView {...resolvedProps} ref={ref} />;
});
