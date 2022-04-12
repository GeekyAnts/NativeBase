import type { CustomProps } from '../../../components/types/utils';
import type { InterfaceButtonProps } from '../../primitives/Button/types';

export interface InterfaceFabProps extends InterfaceButtonProps {
  /**
   * Placement of the Fab
   * @default bottom-right
   */
   placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'|'top-center'|'bottom-center'
   |'center'|'left-center'|'right-center';
  /**
   * Text to be displayed in Fab
   */
  label?: JSX.Element | string;
  /**
   * Icon to be displayed in Fab
   */
  icon?: JSX.Element;
  /**
   * Determines whether the Fab should be rendered in a Portal.
   * Refer this solution before using this prop
   * https://github.com/GeekyAnts/NativeBase/issues/3817
   * @default true
   */
  renderInPortal?: boolean;
}

export type IFabProps = InterfaceFabProps | CustomProps<'FAB'>;
