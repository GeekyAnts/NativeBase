import React from 'react';
import { useEffect } from 'react';
import { BackHandler, Platform } from 'react-native';

type IParams = {
  enabled?: boolean;
  callback: () => any;
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

/**
 * Handles attaching callback for Escape key listener on web and Back button listener on Android
 */
export const useKeyboardDismissable = ({ enabled, callback }: IParams) => {
  // Sur iOS, s'abonner au BackHandler/escape peut provoquer des effets
  // indésirables (perte de focus/clavier qui se ferme). On ne l'active donc
  // pas sur cette plateforme.
  if (Platform.OS === 'ios') return;

  React.useEffect(() => {
    let cleanupFn = () => {};
    if (enabled) {
      cleanupFn = keyboardDismissHandlerManager.push(callback);
    } else {
      cleanupFn();
    }
    return () => {
      cleanupFn();
    };
  }, [enabled, callback]);

  useBackHandler({ enabled, callback });
};

export function useBackHandler({ enabled, callback }: IParams) {
  useEffect(() => {
    if (!enabled) return;
    const backHandler = () => {
      callback();
      return true;
    };
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backHandler
    );
    return () => {
      subscription.remove();
    };
  }, [enabled, callback]);
}
