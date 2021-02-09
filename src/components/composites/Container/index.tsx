import React from 'react';
import { useThemeProps } from '../../../hooks';
import Box from '../../primitives/Box';
import type { IContainerProps } from './types';

const Container = ({ children, centerContent, ...props }: IContainerProps) => {
  const newProps = useThemeProps('Container', props);
  return (
    <Box
      alignItems={centerContent ? 'center' : 'flex-start'}
      textAlign="center"
      {...newProps}
    >
      {children}
    </Box>
  );
};

export default React.memo(Container);
export type { IContainerProps };
