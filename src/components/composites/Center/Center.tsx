import React from 'react';
import Box from '../../primitives/Box';
import type { ICenterProps } from './props';
import { usePropsConfig } from '../../../hooks';
import type { View } from 'react-native';

const Center = (props: ICenterProps, ref: any) => {
  let newProps = usePropsConfig('Center', props);
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

export default React.forwardRef<View, ICenterProps>(Center);
