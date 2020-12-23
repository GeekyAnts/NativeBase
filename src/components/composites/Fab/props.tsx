import type { IBoxProps, IButtonProps } from '../../primitives';

export type IFabProps = IBoxProps & {
  placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  slide?: 'up' | 'down' | 'left' | 'right';
};
export type IFabListProps = IBoxProps & {};
export type IFabItemProps = IButtonProps & {};
