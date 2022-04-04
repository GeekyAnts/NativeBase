import type { InterfaceButtonProps } from '../../primitives/Button/types';
import type { IBoxProps } from '../../primitives/Box';
import type { MutableRefObject } from 'react';
import type { CustomProps } from '../../../components/types';

export interface InterfaceActionsheetProps
  extends IBoxProps<IActionsheetProps> {
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
  /**
   * Props applied on Overlay.
   */
  _backdrop?: any;
}

export interface IActionsheetContentProps
  extends IBoxProps<IActionsheetContentProps> {
  /**
   * Props applied on area above actionsheet content
   */
  _dragIndicatorWrapperOffSet?: IBoxProps<IActionsheetContentProps>;
  /**
   * Props applied on area around drag indicator
   */
  _dragIndicatorWrapper?: IBoxProps<IActionsheetContentProps>;
  /**
   * Props applied on drag indicator
   */
  _dragIndicator?: IBoxProps<IActionsheetContentProps>;
}
export interface IActionsheetFooterProps
  extends IBoxProps<IActionsheetFooterProps> {}
export interface IActionsheetHeaderProps
  extends IBoxProps<IActionsheetHeaderProps> {}
export interface IActionsheetItemProps extends InterfaceButtonProps {}

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
  // Header: React.MemoExoticComponent<
  //   (
  //     props: IActionsheetHeaderProps & { ref?: MutableRefObject<any> }
  //   ) => JSX.Element
  // >;
  // Footer: React.MemoExoticComponent<
  //   (
  //     props: IActionsheetFooterProps & { ref?: MutableRefObject<any> }
  //   ) => JSX.Element
  // >;
};

export type IActionsheetProps = InterfaceActionsheetProps &
  CustomProps<'Actionsheet'>;
