import PopoverContent from './PopoverContent';
import PopoverBody from './PopoverBody';
import PopoverCloseButton from './PopoverCloseButton';
import PopoverFooter from './PopoverFooter';
import PopoverHeader from './PopoverHeader';
import PopoverTrigger from './PopoverTrigger';
import PopoverMain from './popover';
export type { IPopoverProps } from './types';
import type { IPopoverComponentType } from './types';

let PopoverTemp: any = PopoverMain;
PopoverTemp.Content = PopoverContent;
PopoverTemp.Trigger = PopoverTrigger;
PopoverTemp.CloseButton = PopoverCloseButton;
PopoverTemp.Header = PopoverHeader;
PopoverTemp.Footer = PopoverFooter;
PopoverTemp.Body = PopoverBody;

// To add typings
const Popover = PopoverTemp as IPopoverComponentType;
export { Popover };
