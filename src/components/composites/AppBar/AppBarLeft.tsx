import React from 'react';
import { HStack, IStackProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';

const AppBarLeft = (props: IStackProps) => {
  const { color } = useThemeProps('AppBar', props);
  return <HStack alignItems="center" _text={{ color }} {...props} />;
};

export default React.memo(AppBarLeft);
