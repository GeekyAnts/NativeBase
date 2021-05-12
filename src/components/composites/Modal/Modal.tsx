import React, { forwardRef, memo } from 'react';
import { OverlayContainer } from '@react-native-aria/overlays';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import Backdrop from '../Backdrop';
import { Transition, Slide } from '../Transitions';
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
        <Transition
          from={{ opacity: 0 }}
          entry={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          visible={visible}
          style={StyleSheet.absoluteFill}
          exitTransition={{ duration: 150 }}
          entryTransition={{ duration: 200 }}
        >
          {overlayVisible && (
            <Backdrop
              onPress={() => {
                closeOnOverlayClick && setVisible(false);
              }}
            />
          )}
        </Transition>
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
          <Transition
            from={{ opacity: 0 }}
            entry={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            visible={visible}
            style={StyleSheet.absoluteFill}
            exitTransition={{ duration: 100 }}
            entryTransition={{ duration: 200 }}
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
              {child}
            </FocusScope>
          </Transition>
        )}
      </ModalContext.Provider>
    </OverlayContainer>
  );
};

export default memo(forwardRef(Modal));
