import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import { Platform } from 'react-native';
import { Modal } from 'react-native';

interface IOverlayProps {
  isOpen?: boolean;
  children?: any;
  // We use RN modal on android if needed as it supports shifting accessiblity focus to the opened view. IOS automatically shifts focus if an absolutely placed view appears in front.
  useRNModalOnAndroid?: boolean;
  onRequestClose?: any;
}

export function Overlay({
  isOpen,
  children,
  useRNModalOnAndroid = true,
  onRequestClose,
}: IOverlayProps) {
  if (Platform.OS === 'android' && useRNModalOnAndroid) {
    return (
      <Modal
        transparent
        visible={isOpen === true}
        onRequestClose={onRequestClose}
      >
        {children}
      </Modal>
    );
  }

  return isOpen ? <OverlayContainer>{children}</OverlayContainer> : null;
}
