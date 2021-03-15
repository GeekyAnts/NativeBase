import type { ViewProps } from 'react-native';
import type { ReactNode } from 'react';

export type IOverlayProps = ViewProps & {
  children?: ReactNode;
  disableOverlay?: boolean;
  position?: string;
  animationDuration?: number;
  defaultBackgroundColor?: string;
  closeOnPress?: boolean;
  onClose?: Function;
};

export type IOverlayContextProps = {
  setOverlayItem?: any;
  defaultConfig?: any;
  setConfig?: any;
};

export type IOverlayConfig = {
  disableOverlay?: boolean;
  position?: string;
  backgroundColor?: string;
  animationDuration?: number;
  motionPreset?: 'slide' | 'fade' | 'none';
  onClose?: Function;
  closeOnPress?: boolean;
  isKeyboardDismissable?: boolean;
  accessibilityLabel?: string;
  accessibilityViewIsModal?: boolean;
};

export type IuseOverlayProps = () => {
  closeOverlay: () => void;
  setOverlay: (component: ReactNode, config?: IOverlayConfig) => void;
};
