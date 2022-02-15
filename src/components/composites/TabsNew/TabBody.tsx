import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import type { ITabBodyProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const TabBody = ({ children, ...props }: ITabBodyProps, ref?: any) => {
  const { ...resolvedProps } = usePropsResolution(
    'TabBody',
    props,
    {},
    undefined
  );
  return (
    <Box {...resolvedProps} {...props} ref={ref}>
      {children}
    </Box>
  );
};

export default memo(forwardRef(TabBody));
