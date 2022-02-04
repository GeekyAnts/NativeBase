/* eslint-disable @typescript-eslint/no-unused-vars */
import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import { Platform } from 'react-native';
import { Modal } from 'react-native';
import { useKeyboardDismissable } from '../../../hooks';
import { ExitAnimationContext } from './ExitAnimationContext';

interface IOverlayProps {
  isOpen?: boolean;
  children?: any;
  // We use RN modal on android if needed as it supports shifting accessiblity focus to the opened view. IOS automatically shifts focus if an absolutely placed view appears in front.
  useRNModalOnAndroid?: boolean;
  onRequestClose?: (() => any) | undefined;
  isKeyboardDismissable?: boolean;
  animationPreset?: string;
}

export function Overlay({
  children,
  isOpen,
  useRNModalOnAndroid = false,
  isKeyboardDismissable = true,
  //@ts-ignore
  animationPreset = 'fade',
  onRequestClose,
}: IOverlayProps) {
  const [exited, setExited] = React.useState(!isOpen);

  useKeyboardDismissable({
    enabled: isOpen && isKeyboardDismissable,
    callback: onRequestClose ? onRequestClose : () => {},
  });

  //TODO: performance remove-below-lines of code after updating react-native-aria
  if (exited && !isOpen) {
    return null;
  }
  // Android handles multiple Modal in RN and is better for accessibility as it shifts accessibility focus on mount, however it may not needed in case of tooltips, toast where one doesn't need to shift accessibility focus

  //TODO: performance add-below-lines of code after updating react-native-aria
  // let display = exited && !isOpen ? 'none' : 'contents';
  // if (animationPreset === 'slide') {
  //   display = 'contents';
  // }

  if (Platform.OS === 'android' && useRNModalOnAndroid) {
    return (
      <ExitAnimationContext.Provider value={{ exited, setExited }}>
        <Modal transparent visible={true} onRequestClose={onRequestClose}>
          {children}
        </Modal>
      </ExitAnimationContext.Provider>
    );
  }

  // Since OverlayContainer mounts children in NativeBaseProvider  using Context, we need to pass the context by wrapping children
  //TODO: performance add-below-lines of code after updating react-native-aria
  // <OverlayContainer style={{ display: display }}>

  return (
    //@ts-ignore
    <OverlayContainer>
      <ExitAnimationContext.Provider value={{ exited, setExited }}>
        {children}
      </ExitAnimationContext.Provider>
    </OverlayContainer>
  );
}
