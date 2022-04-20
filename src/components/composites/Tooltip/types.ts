import type { CustomProps } from '../../../components/types';
import type { InterfaceBoxProps } from '../../primitives/Box';

export interface InterfaceTooltipProps
  extends InterfaceBoxProps<ITooltipProps> {
  /**
   * Text to be placed in the tooltip
   */
  label: string;
  /**
   * Whether the tooltip is opened. Useful for conrolling the open state
   */
  isOpen?: boolean;
  /**
   * Whether the tooltip is disabled
   */
  isDisabled?: boolean;
  /**
   * If true, the popover will be opened by default
   */
  defaultIsOpen?: boolean;
  /**
   * This function will be invoked when tooltip is closed. It'll also be called when user attempts to close the tooltip via Escape key
   */
  onClose?: () => void;
  /**
   * This function will be invoked when tooltip is opened
   */
  onOpen?: () => void;
  /**
   * Duration in ms to wait till displaying the tooltip
   * @default 0
   */
  openDelay?: number;
  /**
   * Duration in ms to wait till hiding the tooltip
   * @default 0
   */
  closeDelay?: number;
  /**
   * Tooltip placement
   * @default bottom
   */
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
    | 'right top'
    | 'right bottom'
    | 'left top'
    | 'left bottom';
  /**
   * Children passed will be used as Trigger element for the tooltip
   */
  children: any;
  /**
   * Whether tooltip should be closed on Trigger click
   * @default true
   */
  closeOnClick?: boolean;
  /**
   * Size of the arrow
   * @default 12
   */
  arrowSize?: number;
  /**
   * Whether tooltip should display arrow
   * @default false
   */
  hasArrow?: boolean;
  /**
   * Distance between the trigger and the tooltip
   */
  offset?: number;
}

export type ITooltipProps = InterfaceTooltipProps & CustomProps<'Tooltip'>;
