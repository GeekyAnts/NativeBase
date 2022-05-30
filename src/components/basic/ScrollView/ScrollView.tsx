import React, { forwardRef } from 'react';
import { ScrollView as RNScrollView } from 'react-native';
import {
  usePropsResolution,
  useStyledSystemPropsResolver,
} from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { IScrollViewProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyledScrollView: any = makeStyledComponent(RNScrollView);

export const ScrollView = forwardRef((props: IScrollViewProps, ref: any) => {
  const {
    _contentContainerStyle,
    contentContainerStyle,
    ...resolvedProps
  } = usePropsResolution('ScrollView', props, {});
  const resolved_ContentContainerStyle = useStyledSystemPropsResolver(
    _contentContainerStyle || {}
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
