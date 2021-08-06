import React, { forwardRef } from 'react';
import { ScrollView as RNScrollView } from 'react-native';

import {
  usePropsResolution,
  useStyledSystemPropsResolver,
} from '../../../hooks';
import { makeStyledBox } from '../../../utils/styled';
import type { IScrollViewProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyledScrollView: any = makeStyledBox(RNScrollView);

export const ScrollView = forwardRef((props: IScrollViewProps, ref: any) => {
  const {
    _contentContainerStyle,
    contentContainerStyle,
    ...resolvedProps
  } = usePropsResolution('ScrollView', props, ['contentContainerStyle']);
  const resolved_ContentContainerStyle = useStyledSystemPropsResolver(
    _contentContainerStyle
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <StyledScrollView
      {...resolvedProps}
      contentContainerStyle={
        contentContainerStyle || resolved_ContentContainerStyle
      }
      ref={ref}
    />
  );
});
