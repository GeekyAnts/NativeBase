import React from 'react';
import { SectionList as RNSectionList } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledBox } from '../../../utils/styled';
import type { ISectionListProps } from './types';

const StyledSectionList: any = makeStyledBox(RNSectionList);

export const SectionList = (props: ISectionListProps) => {
  const { ...resolvedProps } = usePropsResolution('View', props, {
    ignoreProps: [
      'sections',
      'renderItem',
      'keyExtractor',
      'renderSectionHeader',
    ],
  });

  return <StyledSectionList {...resolvedProps} />;
};
