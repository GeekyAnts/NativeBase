import type { ViewProps } from 'react-native';

export type IPopoverContextProps = {
  setPopoverItem?: any;
  defaultConfig?: any;
  setConfig?: any;
  parentComponentConfig?: any;
};

export type IPopoverConfig = {
  triggerRef: any;
  onClose?: any;
  placeOverTriggerElement?: boolean;
  animationDuration?: number;
  parentComponentConfig?: any;
  /*
  Determines if a popover can be closed using Escape key on web
  Default: true
  */
  isKeyboardDismissable?: boolean;
};

export type IPopoverProps = ViewProps &
  IPopoverConfig & {
    children?: React.ReactNode;
  };
