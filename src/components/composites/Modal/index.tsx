import React from 'react';
import {
  KeyboardAvoidingView,
  Modal as RNModal,
  TouchableOpacity,
  Platform,
} from 'react-native';
import type { Modal as ModalType } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space, position } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customPosition,
} from '../../../utils/customProps';

import type { IModalProps, IModalSemiProps } from './props';
import {
  default as CloseButton,
  ICloseButtonProps,
} from '../../composites/CloseButton';

import { useOverlay } from '../../../core/Overlay';
import { usePropsConfig } from '../../../hooks';
import { Box, View, IBoxProps, VisuallyHidden, Text } from '../../primitives';

const StyledModal = styled(RNModal)<IModalSemiProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);

const ModalContext = React.createContext({
  visible: false,
  toggleVisible: (_bool: boolean) => {},
  toggleOnClose: (_bool: boolean) => {},
  newProps: {
    _width: '60%',
    size: 'md',
    modalOverlayStyle: {},
    closeOnOverlayClick: true,
    modalCloseButtonStyle: {},
    modalCloseButtonProps: {},
    modalFooterProps: {},
    modalBodyProps: {},
    modalContentProps: {},
    modalHeaderProps: {},
    modalOverlayProps: {},
  },
});

const Modal = (
  {
    children,
    isOpen,
    onClose,
    isCentered,
    initialFocusRef,
    finalFocusRef,
    justifyContent,
    alignItems,
    id,
    motionPreset,
    avoidKeyboard,
    overlayColor,
    overlayVisible,
    closeOnOverlayClick,
    ...props
  }: IModalProps,
  ref: any
) => {
  const { closeOverlay, setOverlay } = useOverlay();
  const [isVisible, setIsVisible] = React.useState(true);
  const closeOverlayInMobile = () => {
    setIsVisible(false);
    onClose(false);
  };
  React.useEffect(
    () => {
      isOpen && Platform.OS === 'web'
        ? setOverlay(
            <ModalContext.Provider value={value}>
              <Box ref={ref} nativeID={id} h="100%">
                {modalChildren}
              </Box>
            </ModalContext.Provider>,
            {
              onClose: onClose,
              closeOnPress: closeOnOverlayClick === false ? false : true,
              backgroundColor: overlayColor ? overlayColor : undefined,
              disableOverlay: overlayVisible === false ? true : false,
            }
          )
        : setOverlay(<Box />, {
            onClose: closeOverlayInMobile,
            closeOnPress: closeOnOverlayClick === false ? false : true,
            backgroundColor: overlayColor ? overlayColor : undefined,
            disableOverlay: overlayVisible === false ? true : false,
          });

      !isOpen && closeOverlay();
      setIsVisible(isOpen);
    },
    /*eslint-disable */
    [isOpen]
  );
  const newProps = usePropsConfig('Modal', props);
  const value: any = {
    visible: isVisible,
    toggleVisible: setIsVisible,
    toggleOnClose: onClose,
    newProps: newProps,
  };
  const modalChildren = (
    <Box
      {...newProps.modalProps}
      justifyContent={isCentered ? 'center' : justifyContent}
      alignItems={isCentered ? 'center' : alignItems}
    >
      {closeOnOverlayClick === false ? <Box /> : <ModalOverlay />}
      {children}
      <VisuallyHidden>
        <TouchableOpacity onPress={() => onClose(false)}>
          <Text textAlign="center">Close dialog</Text>
        </TouchableOpacity>
      </VisuallyHidden>
    </Box>
  );
  return Platform.OS !== 'web' ? (
    <ModalContext.Provider value={value}>
      <View nativeID={id}>
        <StyledModal
          visible={isVisible}
          onRequestClose={() => {
            value.toggleVisible(false);
            value.toggleOnClose(false);
          }}
          onShow={() => {
            initialFocusRef?.current?.focus();
          }}
          onDismiss={() => {
            finalFocusRef?.current?.focus();
          }}
          animationType={motionPreset || 'slide'}
          transparent
          {...props}
          ref={ref}
        >
          {avoidKeyboard ? (
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              {modalChildren}
            </KeyboardAvoidingView>
          ) : (
            modalChildren
          )}
        </StyledModal>
      </View>
    </ModalContext.Provider>
  ) : null;
};

export const ModalHeader = (props: IBoxProps) => {
  const { newProps } = React.useContext(ModalContext);
  return <Box {...newProps.modalHeaderProps} {...props} />;
};

export const ModalContent = (props: IBoxProps) => {
  const { newProps } = React.useContext(ModalContext);
  return (
    <Box
      {...newProps.modalContentProps}
      width={newProps._width || newProps.size}
      {...props}
    />
  );
};

export const ModalBody = (props: IBoxProps) => {
  const { newProps } = React.useContext(ModalContext);
  return <Box {...newProps.modalBodyProps} {...props} />;
};

export const ModalFooter = (props: IBoxProps) => {
  const { newProps } = React.useContext(ModalContext);
  return <Box {...newProps.modalFooterProps} {...props} />;
};

export const ModalCloseButton = (props: ICloseButtonProps) => {
  const { toggleVisible, toggleOnClose, newProps } = React.useContext(
    ModalContext
  );
  return (
    <View style={newProps.modalCloseButtonStyle}>
      <CloseButton
        {...newProps.modalCloseButtonProps}
        {...props}
        accessibilityLabel="Close dialog"
        onPress={() => {
          toggleVisible(false);
          toggleOnClose(false);
        }}
      />
    </View>
  );
};

export const ModalOverlay = ({ children, ...props }: any) => {
  const { toggleVisible, toggleOnClose, newProps } = React.useContext(
    ModalContext
  );

  return (
    <Box {...props} style={newProps.modalOverlayStyle}>
      <TouchableOpacity
        style={newProps.modalOverlayStyle}
        accessible={false}
        onPress={
          newProps.closeOnOverlayClick === false
            ? () => {}
            : () => {
                toggleVisible(false);
                toggleOnClose(false);
              }
        }
      />
      {children}
    </Box>
  );
};
export default React.forwardRef<ModalType, IModalProps>(Modal);

export type { IModalProps };
