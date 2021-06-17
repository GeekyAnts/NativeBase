import React from 'react';
import { ScrollView as RNScrollView } from 'react-native';

import {
  usePropsResolution,
  useStyledSystemPropsResolver,
} from '../../../hooks';
import { makeStyledBox } from '../../../utils/styled';
import type { IScrollViewProps } from './types';

const StyledScrollView: any = makeStyledBox(RNScrollView);

export const ScrollView = (props: IScrollViewProps) => {
  const {
    _contentContainerStyle,
    contentContainerStyle,
    ...resolvedProps
  } = usePropsResolution('View', props, ['contentContainerStyle']);
  const resolved_ContentContainerStyle = useStyledSystemPropsResolver(
    _contentContainerStyle
  );

  return (
    <StyledScrollView
      {...resolvedProps}
      contentContainerStyle={
        contentContainerStyle || resolved_ContentContainerStyle
      }
    />
  );
};
