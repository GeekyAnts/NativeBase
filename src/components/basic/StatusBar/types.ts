import type { StatusBarProps } from 'react-native';
import type { CustomProps } from '../../../components/types';

export interface InterfaceStatusBarProps extends StatusBarProps {}
export type IStatusBarProps = InterfaceStatusBarProps &
  CustomProps<'StatusBar'>;

export type IStatusBarComponentType = (props: IStatusBarProps) => JSX.Element;
