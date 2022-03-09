import ActionsheetMain from './Actionsheet';
import ActionsheetItem from './ActionsheetItem';
// import ActionsheetHeader from './ActionsheetHeader';
// import ActionsheetFooter from './ActionsheetFooter';
import ActionsheetContent from './ActionsheetContent';
import type { IActionsheetComponentType } from './types';

const ActionsheetTemp: any = ActionsheetMain;
ActionsheetTemp.Content = ActionsheetContent;
ActionsheetTemp.Item = ActionsheetItem;
// ActionsheetTemp.Header = ActionsheetHeader;
// ActionsheetTemp.Footer = ActionsheetFooter;

// To add typings
const Actionsheet = ActionsheetTemp as IActionsheetComponentType;

export { Actionsheet };

export type {
  IActionsheetProps,
  IActionsheetContentProps,
  IActionsheetItemProps,
} from './types';
