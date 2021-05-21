import React, { forwardRef, memo } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const AlertTitle = ({ children, ...props }: IBoxProps, ref?: any) => {
  const newProps = usePropsResolution('AlertTitle', props);
  return (
    <Box {...newProps} ref={ref}>
      {children}
    </Box>
  );
};
export default memo(forwardRef(AlertTitle));
