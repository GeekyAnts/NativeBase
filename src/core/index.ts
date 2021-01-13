export * from './NativeBaseProvider';
export * from './extendTheme';

export { useOverlay } from './Overlay';
export type {
  IOverlayProps,
  IOverlayContextProps,
  IuseOverlayProps,
} from './Overlay';

export { usePopover } from './Popover';
export type {
  IPopoverProps,
  IPopoverContextProps, // IusePopoverProps,
} from './Popover';

export { default as NBFactory } from './factory';
export type { FactoryComponentProps } from './factory';
