import React, { forwardRef, memo } from 'react';
import { OverlayContainer } from '@react-native-aria/overlays';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import Backdrop from '../Backdrop';
import { Slide } from '../Transitions';
import { FocusScope } from '@react-native-aria/focus';
import {
  useControllableState,
  keyboardDismissHandlerManager,
  usePropsResolution,
} from '../../../hooks';
import { ModalContext } from './Context';
import Box from '../../primitives/Box';
import type { IModalProps } from './types';
import { Fade } from '../../composites/Transitions';

const Modal = (
  {
    children,
    isOpen,
    onClose,
    defaultIsOpen,
    initialFocusRef,
    finalFocusRef,
    avoidKeyboard,
    closeOnOverlayClick = true,
    isKeyboardDismissable = true,
    overlayVisible = true,
    //@ts-ignore - internal purpose only
    animationPreset = 'fade',
    ...rest
  }: IModalProps,
  ref: any
) => {
  const { contentSize, ...restThemeProps } = usePropsResolution('Modal', rest);

  const [visible, setVisible] = useControllableState({
    value: isOpen,
    defaultValue: defaultIsOpen,
    onChange: (val) => {
      if (!val) onClose && onClose();
    },
  });

  React.useEffect(() => {
    let cleanupFn = () => {};
    if (isKeyboardDismissable && visible) {
      cleanupFn = keyboardDismissHandlerManager.push(() => setVisible(false));
    } else {
      cleanupFn();
    }

    return () => {
      cleanupFn();
    };
  }, [visible, isKeyboardDismissable, setVisible]);

  let child = (
    <Box {...restThemeProps} ref={ref} pointerEvents="box-none">
      {avoidKeyboard ? (
        <KeyboardAvoidingView
          behavior="padding"
          style={StyleSheet.absoluteFill}
          pointerEvents="box-none"
        >
          {children}
        </KeyboardAvoidingView>
      ) : (
        children
      )}
    </Box>
  );

  return (
    <OverlayContainer>
      <ModalContext.Provider
        value={{
          handleClose: () => setVisible(false),
          contentSize,
          initialFocusRef,
          finalFocusRef,
        }}
      >
        <Fade
          exitDuration={150}
          entryDuration={200}
          in={visible}
          style={StyleSheet.absoluteFill}
        >
          {overlayVisible && (
            <Backdrop
              onPress={() => {
                closeOnOverlayClick && setVisible(false);
              }}
            />
          )}
        </Fade>
        {animationPreset === 'slide' ? (
          <Slide in={visible} duration={200}>
            <FocusScope
              contain={visible}
              autoFocus={visible && !initialFocusRef}
              restoreFocus={visible && !finalFocusRef}
            >
              {child}
            </FocusScope>
          </Slide>
        ) : (
          <Fade
            exitDuration={100}
            entryDuration={200}
            in={visible}
            style={StyleSheet.absoluteFill}
          >
            <FocusScope
              contain={visible}
              autoFocus={visible && !initialFocusRef}
              restoreFocus={visible && !finalFocusRef}
            >
              {child}
            </FocusScope>
          </Fade>
        )}
      </ModalContext.Provider>
    </OverlayContainer>
  );
};

export default memo(forwardRef(Modal));
