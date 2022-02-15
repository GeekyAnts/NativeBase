import React, { forwardRef, memo } from 'react';
import Box from '../Box/index';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const TableRow = ({ children, ...props }: any, ref?: any) => {
  const { ...resolvedProps } = usePropsResolution('TableData', props);

  return (
    <Box {...resolvedProps} ref={ref}>
      {children}
    </Box>
  );
};

export default memo(forwardRef(TableRow));
