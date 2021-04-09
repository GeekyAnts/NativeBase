import type { IBoxProps } from '../../primitives/Box/types';

export type IDividerProps = IBoxProps & {
  size?: number;
  orientation?: 'vertical' | 'horizontal';
};
