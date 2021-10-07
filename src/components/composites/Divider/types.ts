import type { SpaceType } from '../../../components/types';
import type { IBoxProps } from '../../primitives/Box/types';

export interface IDividerProps extends IBoxProps<IDividerProps> {
  /**
   * The orientation of the divider.
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * The thickness of the divider.
   */
  thickness?: SpaceType;
}
