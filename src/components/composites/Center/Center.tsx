import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Box from '../../primitives/Box';
import type { ICenterProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useColorMode } from '../../../core/color-mode';
import { getThemeProps } from '../../../core';

const Center = (props: ICenterProps, ref: any) => {
  const { colorMode } = useColorMode();

  const { style, unResolvedProps } = getThemeProps(
    'Center',
    colorMode,
    {},
    props
  );

  const reslovedProps = usePropsResolution(
    'Center',
    {
      ...unResolvedProps,
      ...props,
    },
    {}
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Box ref={ref} INTERNAL_themeStyle={style} {...reslovedProps} />;
};

export default memo(forwardRef(Center));
