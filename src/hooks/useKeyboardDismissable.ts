import React from 'react';
import { Platform } from 'react-native';

type IParams = {
  enabled?: boolean;
  onClose: () => void;
};

let keyboardDismissHandlers: Array<() => any> = [];
export const keyboardDismissHandlerManager = {
  push: (handler: () => any) => {
    keyboardDismissHandlers.push(handler);
    return () => {
      keyboardDismissHandlers = keyboardDismissHandlers.filter(
        (h) => h !== handler
      );
    };
  },
  length: () => keyboardDismissHandlers.length,
  pop: () => {
    return keyboardDismissHandlers.pop();
  },
};

export const useKeyboardDismissable = ({ enabled, onClose }: IParams) => {
  React.useEffect(
    function closeOverlayOnEscapeEffectCallback() {
      let escapeKeyListener: any = null;
      if (Platform.OS === 'web') {
        escapeKeyListener = (e: KeyboardEvent) => {
          if (e.key === 'Escape' && enabled) {
            onClose();
          }
        };
        document.addEventListener('keydown', escapeKeyListener);
      }
      return () => {
        if (Platform.OS === 'web') {
          document.removeEventListener('keydown', escapeKeyListener);
        }
      };
    },
    [enabled, onClose]
  );
};
