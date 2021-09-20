import type { IBoxProps } from '../../primitives/Box/types';

export interface IDividerProps extends IBoxProps<IDividerProps> {
  /**
   * The orientation of the divider.
   */
  orientation?: 'vertical' | 'horizontal';
}
