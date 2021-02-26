import type { IIconButtonProps } from '../IconButton';

export type IFabProps = IIconButtonProps & {
  placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  label?: JSX.Element | string;
};
