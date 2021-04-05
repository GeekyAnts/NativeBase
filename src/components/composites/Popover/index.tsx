import { Popover as PopoverMain } from './Popover';
import { PopoverContent } from './PopoverContent';
import PopoverBody from './PopoverBody';
import PopoverCloseButton from './PopoverCloseButton';
import PopoverFooter from './PopoverFooter';
import PopoverHeader from './PopoverHeader';
import type { IPopoverComponentType } from './types';
export type { IPopoverProps } from './types';

let PopoverTemp: any = PopoverMain;
PopoverTemp.Content = PopoverContent;
PopoverTemp.CloseButton = PopoverCloseButton;
PopoverTemp.Header = PopoverHeader;
PopoverTemp.Footer = PopoverFooter;
PopoverTemp.Body = PopoverBody;

// To add typings
const Popover = PopoverTemp as IPopoverComponentType;
export { Popover };
