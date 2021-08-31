import React from 'react';
import { usePropsResolution } from '../../../hooks';
import Box from '../../primitives/Box';
import type { IContainerProps } from './types';

const Container = (
  { children, centerContent, ...props }: IContainerProps,
  ref?: any
) => {
  const resolvedProps = usePropsResolution('Container', props);
  return (
    <Box
      ref={ref}
      // TODO: these style's should be on theme.
      alignItems={centerContent ? 'center' : 'flex-start'}
      _text={{ textAlign: centerContent ? 'center' : 'left' }}
      {...resolvedProps}
    >
      {children}
    </Box>
  );
};

export default React.memo(React.forwardRef(Container));
export type { IContainerProps };
