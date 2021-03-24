import React from 'react';
import { Box } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import type { IKbdProps } from './types';

const Kbd = ({ children, ...props }: IKbdProps, ref?: any) => {
  const newProps = useThemeProps('Kbd', props);
  return (
    <Box {...newProps} ref={ref}>
      {children}
    </Box>
  );
};

export default React.memo(React.forwardRef(Kbd));
export type { IKbdProps };
