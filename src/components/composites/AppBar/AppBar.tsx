import React from 'react';
import { useThemeProps } from '../../../hooks';
import { HStack } from '../../primitives';
import { APPROX_STATUSBAR_HEIGHT } from './utils';
import type { IAppBarProps } from './types';

const AppBar = ({ children, ...props }: IAppBarProps, ref: any) => {
  const {
    statusBarHeight = APPROX_STATUSBAR_HEIGHT,
    ...newProps
  } = useThemeProps('AppBar', props);
  return (
    <HStack
      mt={statusBarHeight}
      justifyContent="space-between"
      alignItems="center"
      {...newProps}
      ref={ref}
    >
      {children}
    </HStack>
  );
};

export default React.memo(React.forwardRef(AppBar));
