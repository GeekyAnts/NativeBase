import type { IButtonProps } from '../../primitives/Button/types';

export interface IFabProps extends IButtonProps {
  /**
   * Placement of the Fab
   * @default bottom-right
   */
  placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  /**
   * Text to be displayed in Fab
   */
  label?: JSX.Element;
  /**
   * Icon to be displayed in Fab
   */
  icon?: JSX.Element;
}
