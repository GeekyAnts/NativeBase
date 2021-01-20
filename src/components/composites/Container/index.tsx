import React from 'react';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import type { IContainerProps } from './props';

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
