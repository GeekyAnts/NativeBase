import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { usePropsConfig } from '../../../hooks';

export type IAppBarContentProps = IBoxProps;

const AppBarContent = (props: IAppBarContentProps) => {
  const { color } = usePropsConfig('AppBar', props);
  return (
    <Box
      flex={1}
      alignItems="center"
      flexDirection="row"
      color={color}
      {...props}
    />
  );
};

export default AppBarContent;
