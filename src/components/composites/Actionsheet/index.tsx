import ActionsheetMain from './Actionsheet';
import ActionsheetItem from './ActionsheetItem';
import ActionsheetContent from './ActionsheetContent';
import type { IActionsheetComponentType } from './types';

const ActionsheetTemp: any = ActionsheetMain;
ActionsheetTemp.Content = ActionsheetContent;
ActionsheetTemp.Item = ActionsheetItem;

// To add typings
const Actionsheet = ActionsheetTemp as IActionsheetComponentType;

export { Actionsheet };

export type {
  IActionsheetProps,
  IActionsheetContentProps,
  IActionsheetItemProps,
} from './types';
