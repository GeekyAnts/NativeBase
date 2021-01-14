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
};

export type IPopoverProps = ViewProps &
  IPopoverConfig & {
    children?: React.ReactNode;
  };
