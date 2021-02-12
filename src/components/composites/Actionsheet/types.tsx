import type { IButtonProps } from '../../primitives/Button';
import type { IBoxProps } from '../../primitives/Box';

export type IActionsheetProps = IBoxProps & {
  isOpen?: boolean;
  onClose?: any;
  disableOverlay?: boolean;
};
export type IActionsheetContentProps = IBoxProps;
export type IActionsheetFooterProps = IBoxProps;
export type IActionsheetHeaderProps = IBoxProps;
export type IActionsheetItemProps = IButtonProps;

export type IActionsheetComponentType = ((
  props: IActionsheetProps
) => JSX.Element) & {
  Content: React.MemoExoticComponent<
    (props: IActionsheetContentProps) => JSX.Element
  >;
  Footer: React.MemoExoticComponent<
    (props: IActionsheetFooterProps) => JSX.Element
  >;
  Header: React.MemoExoticComponent<
    (props: IActionsheetHeaderProps) => JSX.Element
  >;
  Item: React.MemoExoticComponent<
    (props: IActionsheetItemProps) => JSX.Element
  >;
};
