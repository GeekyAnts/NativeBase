import React, { forwardRef, memo } from 'react';
import Box, { IBoxProps } from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const AlertTitle = ({ children, ...props }: IBoxProps, ref?: any) => {
  const newProps = usePropsResolution('AlertTitle', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box {...newProps} ref={ref}>
      {children}
    </Box>
  );
};
export default memo(forwardRef(AlertTitle));
