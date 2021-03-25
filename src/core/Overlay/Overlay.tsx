import React from 'react';
import { Pressable, Modal, StyleSheet } from 'react-native';

type IOverlayProps = {
  isOpen?: boolean;
  children: any;
  onClose?: any;
  useCustomOverlay?: boolean;
  closeOnOutsidePress?: boolean;
};

export function Overlay(props: IOverlayProps) {
  const { isOpen, children } = props;

  const handleClose = () => {
    props.onClose && props.onClose();
    // Perform exit transition if any
  };

  let closeButton = (
    <Pressable
      accessible={false}
      focusable={false}
      style={StyleSheet.absoluteFill}
      onPress={handleClose}
    />
  );

  return (
    <Modal visible={isOpen} animationType="fade" transparent>
      {closeButton}
      {children}
    </Modal>
  );
}
