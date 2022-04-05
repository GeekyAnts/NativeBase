import type { CustomProps, SpaceType } from '../../../components/types';
import type { InterfaceBoxProps } from '../../primitives/Box/types';

export interface InterfaceDividerProps
  extends InterfaceBoxProps<IDividerProps> {
  /**
   * The orientation of the divider.
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * The thickness of the divider.
   */
  thickness?: SpaceType;
}

export type IDividerProps = InterfaceDividerProps & CustomProps<'Divider'>;
