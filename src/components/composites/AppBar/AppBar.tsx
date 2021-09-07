import React from 'react';
import { useThemeProps } from '../../../hooks';
import { HStack } from '../../primitives';
import { APPROX_STATUSBAR_HEIGHT } from './utils';
import type { IAppBarProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const AppBar = ({ children, ...props }: IAppBarProps, ref: any) => {
  const {
    statusBarHeight = APPROX_STATUSBAR_HEIGHT,
    ...newProps
  } = useThemeProps('AppBar', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
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
