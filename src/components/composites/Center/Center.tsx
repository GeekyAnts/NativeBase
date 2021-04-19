import React from 'react';
import { useThemeProps } from '../../../hooks/useThemeProps';
import Box from '../../primitives/Box';
import type { ICenterProps } from './types';

const Center = (props: ICenterProps, ref: any) => {
  let newProps = useThemeProps('Center', props);
  return (
    <Box
      ref={ref}
      {...newProps}
      display="flex"
      alignItems="center"
      justifyContent="center"
    />
  );
};

export default React.memo(React.forwardRef(Center));
