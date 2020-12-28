import type { ViewProps } from 'react-native';

export type IPopoverContextProps = {
  setPopoverItem?: any;
  defaultConfig?: any;
  setConfig?: any;
};

export type IPopoverConfig = {
  triggerRef: any;
  onClose?: any;
  placeOverTriggerElement?: boolean;
  animationDuration?: number;
};

export type IPopoverProps = ViewProps &
  IPopoverConfig & {
    children?: React.ReactNode;
  };
