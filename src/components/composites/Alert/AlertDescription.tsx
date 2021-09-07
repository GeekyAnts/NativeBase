import React, { memo, forwardRef } from 'react';
import { IBoxProps, Box } from '../../primitives';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const AlertDescription = ({ children, ...props }: IBoxProps, ref?: any) => {
  const themeProps = usePropsResolution('AlertDescription', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box {...themeProps} ref={ref}>
      {children}
    </Box>
  );
};
export default memo(forwardRef(AlertDescription));
