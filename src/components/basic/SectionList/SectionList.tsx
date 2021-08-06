import React, { forwardRef } from 'react';
import { SectionList as RNSectionList } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledBox } from '../../../utils/styled';
import type { ISectionListProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyledSectionList: any = makeStyledBox(RNSectionList);

export const SectionList = forwardRef((props: ISectionListProps, ref: any) => {
  const { ...resolvedProps } = usePropsResolution('SectionList', props, {
    ignoreProps: [
      'sections',
      'renderItem',
      'keyExtractor',
      'renderSectionHeader',
    ],
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return <StyledSectionList {...resolvedProps} ref={ref} />;
});
