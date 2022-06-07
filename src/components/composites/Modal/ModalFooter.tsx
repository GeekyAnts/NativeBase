import React, { memo, forwardRef } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { getThemeProps } from '../../../core';

import { useColorMode } from '../../../core/color-mode';
const ModalFooter = (props: IBoxProps, ref?: any) => {
  const { colorMode } = useColorMode();

  const { style, unResolvedProps } = getThemeProps(
    'ModalFooter',
    colorMode,
    {},
    props
  );
  const resolvedProps = usePropsResolution('ModalFooter', {
    ...unResolvedProps,
    ...props,
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Box {...resolvedProps} ref={ref} INTERNAL_themeStyle={style} />;
};

export default memo(forwardRef(ModalFooter));
