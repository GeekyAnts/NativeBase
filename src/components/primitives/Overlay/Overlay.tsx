/* eslint-disable @typescript-eslint/no-unused-vars */
import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import { Platform, ViewStyle } from 'react-native';
import { Modal } from 'react-native';
import { useKeyboardDismissable } from '../../../hooks';
import { ExitAnimationContext } from './ExitAnimationContext';

export interface IOverlayProps {
  isOpen?: boolean;
  children?: any;
  // We use RN modal on android if needed as it supports shifting accessiblity focus to the opened view. IOS automatically shifts focus if an absolutely placed view appears in front.
  useRNModalOnAndroid?: boolean;
  onRequestClose?: (() => any) | undefined;
  isKeyboardDismissable?: boolean;
  animationPreset?: 'fade' | 'slide' | 'none';
  style?: ViewStyle;
  unmountOnExit?: boolean;
}

export function Overlay({
  children,
  isOpen,
  useRNModalOnAndroid = false,
  isKeyboardDismissable = true,
  //@ts-ignore
  animationPreset = 'fade',
  onRequestClose,
  style,
  unmountOnExit,
}: IOverlayProps) {
  const [exited, setExited] = React.useState(!isOpen);

  useKeyboardDismissable({
    enabled: isOpen && isKeyboardDismissable,
    callback: onRequestClose ? onRequestClose : () => {},
  });
  const styleObj = { ...style };
  if (animationPreset === 'slide') {
    styleObj.overflow = 'hidden';
    styleObj.display = 'flex';
  } else {
    styleObj.display = exited && !isOpen ? 'none' : 'flex';
  }

  if (unmountOnExit && !isOpen && exited) {
    return null;
  }

  if (Platform.OS === 'android' && useRNModalOnAndroid) {
    return (
      <ExitAnimationContext.Provider value={{ exited, setExited }}>
        <Modal
          transparent
          visible={isOpen}
          onRequestClose={onRequestClose}
          animationType={animationPreset}
        >
          {children}
        </Modal>
      </ExitAnimationContext.Provider>
    );
  }

  return (
    //@ts-ignore
    <OverlayContainer style={{ ...styleObj }}>
      <ExitAnimationContext.Provider value={{ exited, setExited }}>
        {children}
      </ExitAnimationContext.Provider>
    </OverlayContainer>
  );
}
