import React, { forwardRef } from 'react';
import { SectionList as RNSectionList } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { ISectionListProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyledSectionList: any = makeStyledComponent(RNSectionList);

export const SectionList = forwardRef((props: ISectionListProps, ref: any) => {
  const { ...resolvedProps } = usePropsResolution('SectionList', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return <StyledSectionList {...resolvedProps} ref={ref} />;
});
