import { PopoverContent } from './PopoverContent';
import PopoverBody from './PopoverBody';
import PopoverCloseButton from './PopoverCloseButton';
import PopoverFooter from './PopoverFooter';
import PopoverHeader from './PopoverHeader';
import PopoverMain, { PopoverArrow } from './popover';
export type { IPopoverProps } from './types';
import type { IPopoverComponentType } from './types';

let PopoverTemp: any = PopoverMain;
PopoverTemp.Content = PopoverContent;
PopoverTemp.Arrow = PopoverArrow;
PopoverTemp.CloseButton = PopoverCloseButton;
PopoverTemp.Header = PopoverHeader;
PopoverTemp.Footer = PopoverFooter;
PopoverTemp.Body = PopoverBody;

// To add typings
const Popover = PopoverTemp;
export { Popover };
