import type { IBoxProps } from '../../primitives/Box/types';

export interface IDividerProps extends IBoxProps {
  /**
   * The orientation of the divider.
   */
  orientation?: 'vertical' | 'horizontal';
}
