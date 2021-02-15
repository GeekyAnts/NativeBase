import AppBarMain from './AppBar';
import AppBarLeft from './AppBarLeft';
import AppBarRight from './AppBarRight';
import AppBarContent from './AppBarContent';
import type { IAppBarComponentType } from './types';

const AppBarTemp: any = AppBarMain;
AppBarTemp.Left = AppBarLeft;
AppBarTemp.Right = AppBarRight;
AppBarTemp.Content = AppBarContent;

const AppBar = AppBarTemp as IAppBarComponentType;

export { AppBar };
export type { IAppBarProps } from './types';
