import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { ScrollView, IScrollViewProps } from '../../basic/ScrollView';
import { getThemeProps } from '../../../core';
import { useColorMode } from '../../../core/color-mode';

const ModalBody = (
  { children, ...props }: IBoxProps & { _scrollview?: IScrollViewProps },
  ref?: any
) => {
  const { colorMode } = useColorMode();

  const { style, unResolvedProps } = getThemeProps(
    'ModalBody',
    colorMode,
    {},
    props
  );
  const { _scrollview, ...resolvedProps } = usePropsResolution('ModalBody', {
    ...unResolvedProps,
    ...props,
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <ScrollView {..._scrollview}>
      <Box {...resolvedProps} ref={ref} INTERNAL_themeStyle={style}>
        {children}
      </Box>
    </ScrollView>
  );
};

export default memo(forwardRef(ModalBody));
