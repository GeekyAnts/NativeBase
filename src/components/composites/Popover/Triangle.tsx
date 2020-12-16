import React from 'react';
import { StyleSheet } from 'react-native';
import View from '../../primitives/View';

type Props = {
  style: any;
  isDown: boolean;
  borderBottomColor?: string;
};

const Triangle = ({ style, isDown, borderBottomColor }: Props) => (
  <View
    borderBottomColor={borderBottomColor}
    style={[styles.triangle, style, isDown ? styles.down : {}]}
  />
);

const styles = StyleSheet.create({
  down: {
    transform: [{ rotate: '180deg' }],
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});

export default Triangle;
