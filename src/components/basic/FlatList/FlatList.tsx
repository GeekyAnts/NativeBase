import React, { forwardRef } from 'react';
import { FlatList as RNFlatList } from 'react-native';
import {
  usePropsResolution,
  useStyledSystemPropsResolver,
} from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { IFlatListProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const StyledFlatList: any = makeStyledComponent(RNFlatList);

export const FlatList = forwardRef(
  <T extends object>(props: IFlatListProps<T>, ref: any) => {
    const {
      _contentContainerStyle,
      contentContainerStyle,
      ...resolvedProps
    } = usePropsResolution('FlatList', props);
    const resolved_ContentContainerStyle = useStyledSystemPropsResolver(
      _contentContainerStyle || {}
    );
    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(props)) {
      return null;
    }
    return (
      <StyledFlatList
        {...resolvedProps}
        contentContainerStyle={
          contentContainerStyle || resolved_ContentContainerStyle
        }
        ref={ref}
      />
    );
  }
);
