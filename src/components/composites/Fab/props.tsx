import type { IBoxProps, IButtonProps } from '../../primitives';

export type IFabProps = IButtonProps & {
  position?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
  direction?: 'up' | 'down' | 'left' | 'right';
  icon?: JSX.Element;
  label?: JSX.Element;
};
export type IFabListProps = IBoxProps;
export type IFabItemProps = IButtonProps;
