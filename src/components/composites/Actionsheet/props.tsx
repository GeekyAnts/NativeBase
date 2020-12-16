import type { IButtonProps } from '../../primitives/Button';
import type { IBoxProps } from '../../primitives/Box';

export type IActionsheetProps = IBoxProps & {
  isOpen?: boolean;
  onClose?: any;
  disableOverlay?: boolean;
};
export type IActionsheetContentProps = IBoxProps & {};
export type IActionsheetFooterProps = IBoxProps & {};
export type IActionsheetHeaderProps = IBoxProps & {};
export type IActionsheetItemProps = IButtonProps & {};
