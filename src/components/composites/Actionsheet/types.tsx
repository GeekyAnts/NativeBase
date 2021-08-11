import type { IButtonProps } from '../../primitives/Button';
import type { IBoxProps } from '../../primitives/Box';
import type { MutableRefObject } from 'react';

export interface IActionsheetProps extends IBoxProps {
  /**
   * If true, the ActionSheet will open. Useful for controllable state behaviour
   */
  isOpen?: boolean;
  /**
   * Callback invoked when the modal is closed
   */
  onClose?: () => any;
  /**
   * If true, disables the overlay.
   * @default false
   */
  disableOverlay?: boolean;

  /**
   * If true, hides the drag indicator.
   * @default false
   */
  hideDragIndicator?: boolean;
}

export interface IActionsheetContentProps extends IBoxProps {}
export interface IActionsheetFooterProps extends IBoxProps {}
export interface IActionsheetHeaderProps extends IBoxProps {}
export interface IActionsheetItemProps extends IButtonProps {}

export type IActionsheetComponentType = ((
  props: IActionsheetProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Content: React.MemoExoticComponent<
    (
      props: IActionsheetContentProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
  Item: React.MemoExoticComponent<
    (
      props: IActionsheetItemProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
};
