import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps/usePropsResolution';
import type { ICardProps } from './types';

const Card = ({ children, ...props }: ICardProps, ref: any) => {
  const resolvedProps = usePropsResolution('Card', props);
  return (
    <Box {...resolvedProps} ref={ref}>
      {children}
    </Box>
  );
};
export default memo(forwardRef(Card));
