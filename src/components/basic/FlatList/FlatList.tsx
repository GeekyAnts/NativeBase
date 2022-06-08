import React, { forwardRef } from 'react';
import { FlatList as RNFlatList } from 'react-native';
import {
  usePropsResolution,
  useStyledSystemPropsResolver,
} from '../../../hooks';
import { makeStyledComponent } from '../../../utils/styled';
import type { IFlatListProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { getThemeProps } from '../../../core';
import { useColorMode } from '../../../core/color-mode';

const StyledFlatList: any = makeStyledComponent(RNFlatList);

const FlatListComponent = <ItemT extends any>(
  props: IFlatListProps<ItemT>,
  ref: any
) => {
  const { colorMode } = useColorMode();
  const { style, unResolvedProps } = getThemeProps(
    'Flatlist',
    colorMode,
    {},
    props
  );
  const {
    _contentContainerStyle,
    contentContainerStyle,
    ...resolvedProps
  } = usePropsResolution('FlatList', { ...unResolvedProps, ...props });

  const resolved_ContentContainerStyle = useStyledSystemPropsResolver(
    _contentContainerStyle || {}
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <StyledFlatList
      INTERNAL_themeStyle={style}
      {...resolvedProps}
      contentContainerStyle={
        contentContainerStyle || resolved_ContentContainerStyle
      }
      ref={ref}
    />
  );
};

export const FlatList = forwardRef(FlatListComponent) as <ItemT>(
  props: IFlatListProps<ItemT>,
  ref?: any
) => any;
