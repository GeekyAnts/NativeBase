import React from 'react';
import { Box } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import type { IKbdProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Kbd = ({ children, ...props }: IKbdProps, ref?: any) => {
  const newProps = useThemeProps('Kbd', props);
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

export default React.memo(React.forwardRef(Kbd));
export type { IKbdProps };
