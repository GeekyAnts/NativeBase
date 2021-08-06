import React, { forwardRef } from 'react';
import { FlatList as RNFlatList } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledBox } from '../../../utils/styled';
import type { IFlatListProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyledFlatList: any = makeStyledBox(RNFlatList);

export const FlatList = forwardRef((props: IFlatListProps, ref: any) => {
  const { ...resolvedProps } = usePropsResolution('FlatList', props, {
    ignoreProps: ['data', 'renderItem', 'keyExtractor'],
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <StyledFlatList {...resolvedProps} ref={ref} />;
});
