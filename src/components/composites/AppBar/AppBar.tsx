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

const AppBarInternal = ({ children, ...props }: IAppBarProps) => {
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
    >
      {children}
    </HStack>
  );
};
AppBarInternal.Left = React.memo(AppBarLeft);
AppBarInternal.Right = React.memo(AppBarRight);
AppBarInternal.Content = React.memo(AppBarContent);

const AppBar = React.memo(AppBarInternal);

export default AppBar;
