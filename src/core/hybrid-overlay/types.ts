import type { IOverlayContextProps } from './../Overlay/types';
import type { IPopoverContextProps } from './../Popover/types';
import type { IColorModeContextProps } from './../color-mode/types';

export type IHybridContextProps = {
  overlay: IOverlayContextProps;
  popover: IPopoverContextProps;
  colorMode: IColorModeContextProps;
};
