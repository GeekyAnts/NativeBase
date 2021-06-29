import React, { memo, forwardRef } from 'react';
import { Modal } from '../../composites/Modal';
import type { IActionsheetContentProps } from './types';
import { usePropsResolution } from '../../../hooks';
import { Animated, PanResponder } from 'react-native';
import { ModalContext } from '../Modal/Context';
import Box from '../../primitives/Box';

const ActionsheetContent = (
  { children, ...props }: IActionsheetContentProps,
  ref?: any
) => {
  const newProps = usePropsResolution('ActionsheetContent', props);
  const { handleClose } = React.useContext(ModalContext);
  let pan = React.useRef(new Animated.ValueXY()).current;
  let sheetHeight = React.useRef(0);

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_evt, gestureState) => {
        return gestureState.dy > 15;
      },
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, { dy: pan.y }], {
            useNativeDriver: false,
          })(e, gestureState);
        }
      },
      onPanResponderRelease: (_e, gestureState) => {
        // If sheet is dragged 1/4th of it's height, close it
        if (sheetHeight.current / 4 - gestureState.dy < 0) {
          Animated.timing(pan, {
            toValue: { x: 0, y: sheetHeight.current },
            duration: 150,
            useNativeDriver: true,
          }).start(handleClose);
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
    <Animated.View
      style={{
        transform: [{ translateY: pan.y }],
        width: '100%',
      }}
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout;
        sheetHeight.current = height;
      }}
      pointerEvents="box-none"
    >
      {/* To increase the draggable area */}
      <Box py={5} {...panResponder.panHandlers} collapsable={false} />

      <Modal.Content {...newProps} ref={ref} safeAreaBottom>
        {/* Hack. Fix later. Add -2 negative margin to remove the padding added by ActionSheetContent */}
        <Box
          py={5}
          mt={-2}
          {...panResponder.panHandlers}
          width="100%"
          alignItems="center"
          collapsable={false}
        >
          <Box bg="coolGray.400" height={1} width={9} borderRadius={2} />
        </Box>
        {children}
      </Modal.Content>
    </Animated.View>
  );
};

export default memo(forwardRef(ActionsheetContent));
