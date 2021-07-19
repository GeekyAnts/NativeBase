import React, { forwardRef } from 'react';
import { SectionList as RNSectionList } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { ISectionListProps } from './types';

const StyledSectionList: any = makeStyledComponent(RNSectionList);

export const SectionList = forwardRef((props: ISectionListProps, ref: any) => {
  const { ...resolvedProps } = usePropsResolution('SectionList', props);

  return <StyledSectionList {...resolvedProps} ref={ref} />;
});
