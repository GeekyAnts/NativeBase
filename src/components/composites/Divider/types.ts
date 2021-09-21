import type { IBoxProps } from '../../primitives/Box/types';
import type { ResponsiveValue } from '../../types/responsiveValue';
import type { ISpacing } from '../../../theme/base/space';

export interface IDividerProps extends IBoxProps<IDividerProps> {
  /**
   * The orientation of the divider.
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * The thickness of the divider.
   */
  thickness?: ResponsiveValue<ISpacing | (string & {}) | number>;
}
