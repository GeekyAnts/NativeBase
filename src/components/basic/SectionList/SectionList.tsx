import React, { forwardRef } from 'react';
import { SectionList as RNSectionList } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/makeStyledComponent';
import type { ISectionListProps } from './types';

const StyledSectionList: any = makeStyledComponent(RNSectionList);

const SectionListComponent = <ItemT extends any, sectionT extends any>(
  props: ISectionListProps<ItemT, sectionT>,
  ref: any
) => {
  const { ...resolvedProps } = usePropsResolution('SectionList', props);

  return <StyledSectionList {...resolvedProps} ref={ref} />;
};

export const SectionList = forwardRef(SectionListComponent) as <
  ItemT,
  sectionT
>(
  props: ISectionListProps<ItemT, sectionT>,
  ref: any
) => any;
