import React, { forwardRef } from 'react';
import { FlatList as RNFlatList } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { IFlatListProps } from './types';

const StyledFlatList: any = makeStyledComponent(RNFlatList);

export const FlatList = forwardRef((props: IFlatListProps, ref: any) => {
  const { ...resolvedProps } = usePropsResolution('FlatList', props);

  return <StyledFlatList {...resolvedProps} ref={ref} />;
});
