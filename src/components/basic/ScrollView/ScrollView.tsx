import React, { forwardRef } from 'react';
import { ScrollView as RNScrollView } from 'react-native';
import {
  usePropsResolution,
  useStyledSystemPropsResolver,
} from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { IScrollViewProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { getThemeProps } from '../../../core';
import { useColorMode } from '../../../core/color-mode';

const StyledScrollView: any = makeStyledComponent(RNScrollView);

export const ScrollView = forwardRef((props: IScrollViewProps, ref: any) => {
  const { colorMode } = useColorMode();

  const { style, unResolvedProps } = getThemeProps(
    'ScrollView',
    colorMode,
    {},
    props
  );
  const {
    _contentContainerStyle,
    contentContainerStyle,
    ...resolvedProps
  } = usePropsResolution('ScrollView', { ...unResolvedProps, ...props }, {});
  const resolved_ContentContainerStyle = useStyledSystemPropsResolver(
    _contentContainerStyle || {}
  );

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <StyledScrollView
      INTERNAL_themeStyle={style}
      {...resolvedProps}
      contentContainerStyle={
        contentContainerStyle || resolved_ContentContainerStyle
      }
      ref={ref}
    />
  );
});
