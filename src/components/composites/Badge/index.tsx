import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import type { IBadgeProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Badge = ({ children, ...props }: IBadgeProps, ref: any) => {
  let newProps = usePropsResolution('Badge', props);
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

export default memo(forwardRef(Badge));
export type { IBadgeProps };
