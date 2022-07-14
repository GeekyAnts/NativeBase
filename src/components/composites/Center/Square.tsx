import React from 'react';
import Box from '../../primitives/Box';
import type { ISquareProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';

const Square = (props: ISquareProps) => {
  const resolvedProps = usePropsResolution('Square', props);

  return <Box {...resolvedProps} />;
};

export default React.memo(Square);
