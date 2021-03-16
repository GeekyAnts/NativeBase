import React from 'react';
import { useThemeProps } from '../../../hooks';
import Box from '../../primitives/Box';
import type { IContainerProps } from './types';

const Container = (
  { children, centerContent, ...props }: IContainerProps,
  ref?: any
) => {
  const newProps = useThemeProps('Container', props);
  return (
    <Box
      ref={ref}
      alignItems={centerContent ? 'center' : 'flex-start'}
      textAlign={centerContent ? 'center' : 'left'}
      {...newProps}
    >
      {children}
    </Box>
  );
};

export default React.memo(React.forwardRef(Container));
export type { IContainerProps };
