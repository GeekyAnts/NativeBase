import React from 'react';
import Box from '../../primitives/Box';
import { usePropsConfig } from '../../../hooks';
import type { IContainerProps } from './props';

const Container = ({ children, centerContent, ...props }: IContainerProps) => {
  const newProps = usePropsConfig('Container', props);
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

export default Container;
export type { IContainerProps };
