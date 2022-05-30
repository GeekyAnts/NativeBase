import React, { forwardRef } from 'react';
import { SectionList as RNSectionList } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { ISectionListProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyledSectionList: any = makeStyledComponent(RNSectionList);

const SectionListComponent = <ItemT extends any, sectionT extends any>(
  props: ISectionListProps<ItemT, sectionT>,
  ref: any
) => {
  const { ...resolvedProps } = usePropsResolution('SectionList', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return <StyledSectionList {...resolvedProps} ref={ref} />;
};

export const SectionList = forwardRef(SectionListComponent) as <
  ItemT,
  sectionT
>(
  props: ISectionListProps<ItemT, sectionT>,
  ref: any
) => any;
