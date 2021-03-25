import React from 'react';
import { Pressable, Modal, StyleSheet } from 'react-native';

type IOverlayProps = {
  isOpen?: boolean;
  children: any;
  onClose?: any;
  useCustomOverlay?: boolean;
  closeOnBlur?: boolean;
};

export function Overlay(props: IOverlayProps) {
  const { isOpen, children, closeOnBlur = true } = props;

  const handleClose = () => {
    props.onClose && props.onClose();
  };

  let closeButton = (
    <Pressable
      accessible={false}
      focusable={false}
      style={StyleSheet.absoluteFill}
      onPress={handleClose}
      disabled={!closeOnBlur}
    />
  );

  return (
    <Modal visible={!!isOpen} animationType="fade" transparent>
      {closeButton}
      {children}
    </Modal>
  );
}
