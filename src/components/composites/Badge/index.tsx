import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import type { IBadgeProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const Badge = ({ children, ...props }: IBadgeProps, ref: any) => {
  let newProps = usePropsResolution('Badge', props);
  return (
    <Box {...newProps} ref={ref}>
      {children}
    </Box>
  );
};

export default memo(forwardRef(Badge));
export type { IBadgeProps };
