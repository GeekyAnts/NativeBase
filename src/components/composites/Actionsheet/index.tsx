import ActionsheetMain from './Actionsheet';
import ActionsheetContent from './ActionsheetContent';
import ActionsheetFooter from './ActionsheetFooter';
import ActionsheetHeader from './ActionsheetHeader';
import ActionsheetItem from './ActionsheetItem';
import type { IActionsheetComponentType } from './types';

const ActionsheetTemp: any = ActionsheetMain;
ActionsheetTemp.Content = ActionsheetContent;
ActionsheetTemp.Footer = ActionsheetFooter;
ActionsheetTemp.Header = ActionsheetHeader;
ActionsheetTemp.Item = ActionsheetItem;

// To add typings
const Actionsheet = ActionsheetTemp as IActionsheetComponentType;

export { Actionsheet };

export type {
  IActionsheetProps,
  IActionsheetContentProps,
  IActionsheetFooterProps,
  IActionsheetHeaderProps,
  IActionsheetItemProps,
} from './types';
