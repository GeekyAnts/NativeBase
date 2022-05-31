import React from 'react';
import { usePropsResolution } from '../../../hooks';
import Box from '../../primitives/Box';
import type { IContainerProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useColorMode } from '../../../core/color-mode';
import { getThemeProps } from '../../../core';

const Container = ({ children, ...props }: IContainerProps, ref?: any) => {
  const { colorMode } = useColorMode();
  const { style, unResolvedProps } = getThemeProps(
    'Container',
    colorMode,
    {},
    props
  );

  const resolvedProps = usePropsResolution(
    'Container',
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

  return (
    <Box ref={ref} INTERNAL_themeStyle={style} {...resolvedProps}>
      {children}
    </Box>
  );
};

export default React.memo(React.forwardRef(Container));
export type { IContainerProps };
