import React, { memo, forwardRef } from 'react';
import { IBoxProps, Box } from '../../primitives';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const AlertDescription = ({ children, ...props }: IBoxProps, ref?: any) => {
  const themeProps = usePropsResolution('AlertDescription', props);
  return (
    <Box {...themeProps} ref={ref}>
      {children}
    </Box>
  );
};
export default memo(forwardRef(AlertDescription));
