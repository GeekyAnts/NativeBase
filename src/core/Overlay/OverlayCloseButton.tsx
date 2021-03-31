import React from 'react';
import { StyleSheet } from 'react-native';
import Pressable from '../../components/primitives/Pressable';

type IOverlayCloseButtonProps = {
  onPress: () => void;
  disabled?: boolean;
};

export function OverlayCloseButton(props: IOverlayCloseButtonProps) {
  return (
    <Pressable
      accessible={false}
      focusable={false}
      style={[StyleSheet.absoluteFill]}
      onPress={props.onPress}
      disabled={props.disabled}
    />
  );
}
