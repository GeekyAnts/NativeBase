import React, { memo, forwardRef } from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetProps } from './types';
import { usePropsResolution } from '../../../hooks';
import { Animated, PanResponder } from 'react-native';

const Actionsheet = ({ children, ...props }: IActionsheetProps, ref: any) => {
  const { isOpen, disableOverlay, onClose, ...newProps } = usePropsResolution(
    'Actionsheet',
    props
  );
  let pan = React.useRef(new Animated.ValueXY()).current;
  let sheetHeight = React.useRef(0);

  React.useEffect(() => {
    if (!isOpen) {
      // Reset value when modal close animation is completed
      setTimeout(() => {
        pan.setValue({
          x: 0,
          y: 0,
        });
      }, 250);
    }
  }, [isOpen, pan]);

  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_evt, gestureState) => {
        // return true if user is swiping, return false if it's a single click
        return gestureState.dx !== 0 || gestureState.dy !== 0;
      },
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, { dy: pan.y }], {useNativeDriver: false})(e, gestureState);
        }
      },
      onPanResponderRelease: (_e, gestureState) => {
        // If sheet is dragged 1/4th of it's height, close it
        if (sheetHeight.current / 4 - gestureState.dy < 0) {
          Animated.timing(pan, {
            toValue: { x: 0, y: sheetHeight.current },
            duration: 150,
            useNativeDriver: true,
          }).start(() => {
            onClose();
          });
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            overshootClamping: true,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      justifyContent="flex-end"
      //@ts-ignore - internal use only
      animationPreset="slide"
      {...newProps}
      overlayVisible={disableOverlay ? false : true}
      closeOnOverlayClick={disableOverlay ? false : true}
      ref={ref}
    >
      <Animated.View
        style={{
          transform: [{ translateY: pan.y }],
          width: '100%',
        }}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          sheetHeight.current = height;
        }}
        {...panResponder.panHandlers}
      >
        {children}
      </Animated.View>
    </Modal>
  );
};

export default memo(forwardRef(Actionsheet));
