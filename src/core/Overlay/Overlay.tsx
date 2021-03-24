import React from 'react';
import { OverlayContainer } from '@react-native-aria/overlays';
import { Pressable, Modal, StyleSheet } from 'react-native';

type IOverlayProps = {
  isOpen?: boolean;
  children: any;
  onClose?: any;
  useCustomOverlay?: boolean;
  closeOnOutsidePress?: boolean;
};

export function Overlay(props: IOverlayProps) {
  const {
    isOpen,
    children,
    useCustomOverlay,
    closeOnOutsidePress = true,
  } = props;
  const [exited, setExited] = React.useState(!isOpen);

  let handleEntered = React.useCallback(() => {
    setExited(false);
  }, []);

  let handleExited = React.useCallback(() => {
    setExited(true);
  }, []);

  let mountOverlay = isOpen || !exited;
  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  const handleClose = () => {
    props.onClose && props.onClose();
    // Perform exit transition if any
  };

  const handleOpen = () => {
    // Perform exit transition if any
    setExited(false);
  };

  let closeButton = (
    <Pressable
      accessible={false}
      focusable={false}
      style={StyleSheet.absoluteFill}
      onPress={handleClose}
    />
  );

  // if (useCustomOverlay) {
  //   return (
  //     <OverlayContainer>
  //       {closeButton}
  //       {children}
  //     </OverlayContainer>
  //   );
  // } else {
  return (
    <Modal visible={isOpen} animationType="fade" transparent>
      {closeButton}
      {children}
    </Modal>
  );
  // }
}
