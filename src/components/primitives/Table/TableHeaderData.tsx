import React, { memo, forwardRef } from 'react';
import Box from '../Box/index';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { ITableHeaderDataProps } from './types';

const TableHeaderData = (
  { children, ...props }: ITableHeaderDataProps,
  ref?: any
) => {
  const { ...resolvedProps } = usePropsResolution('TableHeaderData', props);

  return (
    <Box {...resolvedProps} ref={ref}>
      {children}
    </Box>
  );
};

export default memo(forwardRef(TableHeaderData));
