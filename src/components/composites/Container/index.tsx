import React from 'react';
import { usePropsResolution } from '../../../hooks';
import Box from '../../primitives/Box';
import type { IContainerProps } from './types';

const Container = ({ children, ...props }: IContainerProps, ref?: any) => {
  const resolvedProps = usePropsResolution('Container', props, {});

  return (
    <Box ref={ref} {...resolvedProps}>
      {children}
    </Box>
  );
};

export default React.memo(React.forwardRef(Container));
export type { IContainerProps };
