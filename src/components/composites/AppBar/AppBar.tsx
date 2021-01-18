import React from 'react';
import { useThemeProps } from '../../../hooks';
import AppBarLeft from './AppBarLeft';
import AppBarRight from './AppBarRight';
import AppBarContent from './AppBarContent';
import { HStack, IBoxProps } from '../../primitives';
import { APPROX_STATUSBAR_HEIGHT } from './utils';

export type IAppBarProps = IBoxProps & {
  colorScheme?: string;
  statusBarHeight?: number;
  space?: number;
};

const AppBar = ({ children, ...props }: IAppBarProps) => {
  const {
    statusBarHeight = APPROX_STATUSBAR_HEIGHT,
    ...newProps
  } = useThemeProps('AppBar', props);
  return (
    <HStack mt={statusBarHeight} {...newProps}>
      {children}
    </HStack>
  );
};

AppBar.Left = AppBarLeft;
AppBar.Right = AppBarRight;
AppBar.Content = AppBarContent;

export default AppBar;
