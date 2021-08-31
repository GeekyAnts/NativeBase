import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Box from '../../primitives/Box';
import type { ICenterProps } from './types';

const Center = (props: ICenterProps, ref: any) => {
  const reslovedProps = usePropsResolution('Center', props);
  return (
    <Box
      ref={ref}
      {...reslovedProps}
      display="flex"
      alignItems="center"
      justifyContent="center"
    />
  );
};

export default memo(forwardRef(Center));
