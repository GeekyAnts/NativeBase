import React from 'react';
import { HStack, IStackProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const AppBarLeft = (props: IStackProps) => {
  const { color } = useThemeProps('AppBar', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <HStack alignItems="center" _text={{ color }} {...props} />;
};

export default React.memo(AppBarLeft);
