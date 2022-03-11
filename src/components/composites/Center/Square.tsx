import React from 'react';
import Box from '../../primitives/Box';
import type { ISquareProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const Square = (props: ISquareProps) => {
  const resolvedProps = usePropsResolution('Square', props);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Box {...resolvedProps} />;
};

export default React.memo(Square);
