import React, { forwardRef } from 'react';
import { SectionList as RNSectionList } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledBox } from '../../../utils/styled';
import type { ISectionListProps } from './types';

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

  return <StyledSectionList {...resolvedProps} ref={ref} />;
});
