import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps/usePropsResolution';
import type { ICardProps } from './types';

const Card = ({ children, ...props }: ICardProps, ref: any) => {
  let newProps = usePropsResolution('Card', props);
  return (
    <Box {...newProps} ref={ref}>
      {children}
    </Box>
  );
};
export default memo(forwardRef(Card));
