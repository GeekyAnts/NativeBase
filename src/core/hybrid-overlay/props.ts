import type { IOverlayContextProps } from './../Overlay/props';
import type { IPopoverContextProps } from './../Popover/props';

export type IHybridContextProps = {
  overlay: IOverlayContextProps;
  popover: IPopoverContextProps;
  // TODO: add types
  colorMode: any;
};
