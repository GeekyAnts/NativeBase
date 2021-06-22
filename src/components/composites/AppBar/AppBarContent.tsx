import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';

export type IAppBarContentProps = IBoxProps;

const AppBarContent = (props: IAppBarContentProps) => {
  const { color } = useThemeProps('AppBar', props);
  return (
    <Box alignItems="center" flexDirection="row" _text={{ color }} {...props} />
  );
};

export default React.memo(AppBarContent);
