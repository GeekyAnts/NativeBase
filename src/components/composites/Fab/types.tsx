import type { IIconButtonProps } from '../IconButton';

export type IFabProps = IIconButtonProps & {
  placement?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
  label?: JSX.Element | string;
};
