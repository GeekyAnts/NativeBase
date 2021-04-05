import type { IButtonProps } from '../../primitives/Button/types';

export type IFabProps = IButtonProps & {
  placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  label?: JSX.Element;
  icon?: JSX.Element;
};
