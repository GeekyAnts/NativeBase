import React, { forwardRef, memo } from 'react';
import Box from '../../primitives/Box';
import type { IActionsheetHeaderProps } from './types';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { getThemeProps } from '../../../core';
import { useColorMode } from '../../../core/color-mode';

const ActionsheetHeader = (props: IActionsheetHeaderProps, ref?: any) => {
  const { colorMode } = useColorMode();

  const { style, unResolvedProps, styleFromProps } = getThemeProps(
    'ActionsheetHeader',
    colorMode,
    {},
    props
  );
  const resolvedProps = usePropsResolution('ActionsheetHeader', {
    ...unResolvedProps,
    ...props,
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      {...resolvedProps}
      ref={ref}
      INTERNAL_themeStyle={style}
    />
  );
};

export default memo(forwardRef(ActionsheetHeader));
