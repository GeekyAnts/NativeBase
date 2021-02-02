import React from 'react';
import type { View } from 'react-native';
import { useThemeProps } from '../../../hooks';
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

export default React.memo(React.forwardRef<View, ICenterProps>(Center));
