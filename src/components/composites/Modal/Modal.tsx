import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Backdrop } from '..';
import { Transition } from '../Toast';
import { FocusScope } from '@react-native-aria/focus';
import { useControllableState, useKeyboardDismissable } from '../../../hooks';
import { useThemeProps } from '../../../hooks';
import ModalContent from './ModalContent';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import { ModalContext } from './Context';
import Box, { IBoxProps } from '../../primitives/Box';
import type { IIconButtonProps } from '../../composites/IconButton';

export type IModalProps = IBoxProps & {
  children?: any;
  isOpen?: boolean;
  onClose?: any;
  defaultIsOpen?: boolean;
  size?: string;
  initialFocusRef?: any;
  finalFocusRef?: any;
  avoidKeyboard?: boolean;
  closeOnOverlayClick?: boolean;
  isKeyboardDismissable?: boolean;
  overlayVisible?: boolean;
};

const Modal = React.forwardRef(
  (
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
    const { contentSize, ...restThemeProps } = useThemeProps('Modal', rest);

    const [visible, setVisible] = useControllableState({
      value: isOpen,
      defaultValue: defaultIsOpen,
      onChange: (val) => {
        if (!val) onClose && onClose();
      },
    });

    useKeyboardDismissable({
      onClose: () => setVisible(false),
      enabled: visible && isKeyboardDismissable,
    });

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
            exitDuration={100}
            enterDuration={200}
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
  }
);

let ModalMain: any = Modal;
ModalMain.Content = ModalContent;
ModalMain.CloseButton = ModalCloseButton;
ModalMain.Header = ModalHeader;
ModalMain.Footer = ModalFooter;
ModalMain.Body = ModalBody;

export type IModalComponentType = ((
  props: IModalProps & { ref: any }
) => JSX.Element) & {
  Body: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  CloseButton: React.MemoExoticComponent<
    (props: Omit<IIconButtonProps, 'icon'> & { ref?: any }) => JSX.Element
  >;
  Content: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  Footer: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  Header: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
};

export default ModalMain as IModalComponentType;
