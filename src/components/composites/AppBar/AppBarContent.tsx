import React from 'react';
import { Box, IBoxProps } from '../../primitives';

export type IAppBarContentProps = IBoxProps;

const AppBarContent = (props: IAppBarContentProps) => {
  return <Box flex={1} alignItems="center" flexDirection="row" {...props} />;
};

export default AppBarContent;
