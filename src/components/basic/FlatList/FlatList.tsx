import React from 'react';
import { FlatList as RNFlatList } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledBox } from '../../../utils/styled';
import type { IFlatListProps } from './types';

const StyledFlatList: any = makeStyledBox(RNFlatList);

export const FlatList = (props: IFlatListProps) => {
  const { ...resolvedProps } = usePropsResolution('View', props, {
    ignoreProps: ['data', 'renderItem', 'keyExtractor'],
  });

  return <StyledFlatList {...resolvedProps} />;
};
