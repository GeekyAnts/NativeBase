import React from 'react';
import { OverlayContainer } from '@react-native-aria/overlays';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import Backdrop from '../Backdrop';
import { Transition } from '../Transitions';
import { FocusScope } from '@react-native-aria/focus';
import {
  useControllableState,
  keyboardDismissHandlerManager,
  usePropsResolution,
} from '../../../hooks';
import { ModalContext } from './Context';
import Box from '../../primitives/Box';
import type { IModalProps } from './types';

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
        <Transition
          from={{ opacity: 0 }}
          entry={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          visible={visible}
          style={StyleSheet.absoluteFill}
          exitDuration={150}
          entryDuration={200}
        >
          {overlayVisible && (
            <Backdrop
              onPress={() => {
                closeOnOverlayClick && setVisible(false);
              }}
            />
          )}
          <FocusScope
            contain={visible}
            autoFocus={visible && !initialFocusRef}
            restoreFocus={visible && !finalFocusRef}
          >
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
          </FocusScope>
        </Transition>
      </ModalContext.Provider>
    </OverlayContainer>
  );
};

export default React.forwardRef(Modal);
