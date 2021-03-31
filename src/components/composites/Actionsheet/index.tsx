import ActionsheetMain from './Actionsheet';
import ActionsheetItem from './ActionsheetItem';
import ActionsheetContent from './ActionsheetContent';
import type { IActionsheetComponentType } from './types';
// Remove it as it's not required for MD design.
// import ActionsheetFooter from './ActionsheetFooter';
// import ActionsheetHeader from './ActionsheetHeader';

const ActionsheetTemp: any = ActionsheetMain;
ActionsheetTemp.Content = ActionsheetContent;
// ActionsheetTemp.Footer = ActionsheetFooter;
// ActionsheetTemp.Header = ActionsheetHeader;
ActionsheetTemp.Item = ActionsheetItem;

// To add typings
const Actionsheet = ActionsheetTemp as IActionsheetComponentType;

export { Actionsheet };

export type {
  IActionsheetProps,
  IActionsheetContentProps,
  // IActionsheetFooterProps,
  // IActionsheetHeaderProps,
  IActionsheetItemProps,
} from './types';
