import React from 'react';
import { usePropsResolution } from '../../../hooks';
import Box from '../../primitives/Box';
import type { IContainerProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Container = (
  { children, centerContent, ...props }: IContainerProps,
  ref?: any
) => {
  const newProps = usePropsResolution('Container', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box
      ref={ref}
      alignItems={centerContent ? 'center' : 'flex-start'}
      _text={{ textAlign: centerContent ? 'center' : 'left' }}
      {...newProps}
    >
      {children}
    </Box>
  );
};

export default React.memo(React.forwardRef(Container));
export type { IContainerProps };
