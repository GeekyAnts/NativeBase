import React, { forwardRef } from 'react';
import { SectionList as RNSectionList } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { ISectionListProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { getThemeProps } from '../../../core';
import { useColorMode } from '../../../core/color-mode';

const StyledSectionList: any = makeStyledComponent(RNSectionList);

const SectionListComponent = <ItemT extends any, sectionT extends any>(
  props: ISectionListProps<ItemT, sectionT>,
  ref: any
) => {
  const { colorMode } = useColorMode();
  const { style, unResolvedProps } = getThemeProps(
    'Flatlist',
    colorMode,
    {},
    props
  );
  const { ...resolvedProps } = usePropsResolution('SectionList', {
    ...unResolvedProps,
    ...props,
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <StyledSectionList
      INTERNAL_themeStyle={style}
      {...resolvedProps}
      ref={ref}
    />
  );
};

export const SectionList = forwardRef(SectionListComponent) as <
  ItemT,
  sectionT
>(
  props: ISectionListProps<ItemT, sectionT>,
  ref: any
) => any;
