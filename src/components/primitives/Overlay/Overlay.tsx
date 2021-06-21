import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import { Platform } from 'react-native';
import { Modal } from 'react-native';
import { AnimatedPresenceContext } from '../../composites/Transitions/AnimatedPresence';

interface IOverlayProps {
  children?: any;
  // We use RN modal on android if needed as it supports shifting accessiblity focus to the opened view. IOS automatically shifts focus if an absolutely placed view appears in front.
  useRNModalOnAndroid?: boolean;
  onRequestClose?: any;
}

export function Overlay({
  children,
  useRNModalOnAndroid = true,
  onRequestClose,
}: IOverlayProps) {
  const { setSafeToUnmount, visible } = React.useContext(
    AnimatedPresenceContext
  );

  // Android handles multiple Modal in RN and is better for accessibility as it shifts accessibility focus on mount, however it may not needed in case of tooltips, toast where one doesn't need to shift accessibility focus
  if (Platform.OS === 'android' && useRNModalOnAndroid) {
    return (
      <Modal transparent visible={true} onRequestClose={onRequestClose}>
        {children}
      </Modal>
    );
  }

  // Since OverlayContainer mounts children in NativeBaseProvider  using Context, we need to pass the previous context here
  return (
    <OverlayContainer>
      <AnimatedPresenceContext.Provider value={{ setSafeToUnmount, visible }}>
        {children}
      </AnimatedPresenceContext.Provider>
    </OverlayContainer>
  );
}
