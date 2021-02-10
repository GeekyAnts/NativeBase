import React from 'react';
import type { Modal as ModalType } from 'react-native';
import { View } from 'react-native';
import {
  KeyboardAvoidingView,
  Modal as RNModal,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space } from 'styled-system';
import { usePreventScroll, useModal } from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { useThemeProps } from '../../../hooks';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
} from '../../../utils/customProps';
import {
  default as CloseButton,
  ICloseButtonProps,
} from '../../composites/CloseButton';
import { Box, Heading, IBoxProps } from '../../primitives';
import type { IModalProps, IModalSemiProps } from './types';
import { useOverlay } from './useOverlay';

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
    isOpen,
    onClose,
    initialFocusRef,
    finalFocusRef,
    justifyContent,
    alignItems,
    id,
    motionPreset,
    avoidKeyboard,
    overlayColor,
    overlayVisible,
    ...props
  }: IModalProps,
  ref: any
) => {
  let __ref = React.useRef(null);
  console.log(useOverlay, 'overlay');
  let data = useOverlay();
  // const { closeOverlay, setOverlay } = useOverlay();
  if (Platform.OS === 'web') {
    let { modalProps } = useModal();
    let { dialogProps, titleProps } = useDialog({}, __ref);
  }
  // let { modalProps } = useModal();
  // let { dialogProps, titleProps } = useDialog({}, __ref);
  const [isVisible, setIsVisible] = React.useState(true);
  const closeOverlayInMobile = () => {
    setIsVisible(false);
    onClose(false);
  };

  // useButton ensures that focus management is handled correctly,
  // across all browsers. Focus is restored to the button once the
  // dialog closes.

  //@ts-ignore
  let { title, children } = props;
  const newProps = useThemeProps('Modal', props);
  const value: any = {
    visible: isVisible,
    toggleVisible: setIsVisible,
    toggleOnClose: onClose ? onClose : () => {},
    newProps: newProps,
  };
  const modalChildren = (
    <Box
      {...newProps.modalProps}
      justifyContent={justifyContent ?? 'center'}
      alignItems={alignItems ?? 'center'}
    >
      {props.closeOnOverlayClick === false ? <Box /> : <ModalOverlay />}
      {children}
    </Box>
  );
  React.useEffect(
    () => {
      isOpen && Platform.OS === 'web'
        ? null
        : data.setOverlay &&
          data.setOverlay(<Box />, {
            onClose: closeOverlayInMobile,
            closeOnPress: props.closeOnOverlayClick === false ? false : true,
            backgroundColor: overlayColor ? overlayColor : undefined,
            disableOverlay: overlayVisible === false ? true : false,
          });

      if (data.closeOverlay) {
        !isOpen && data.closeOverlay();
      }
      setIsVisible(isOpen);
    },
    /*eslint-disable */
    [isOpen]
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
          onShow={() => initialFocusRef?.current?.focus()}
          onDismiss={() => finalFocusRef?.current?.focus()}
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
  ) : (
    <ModalContext.Provider value={value}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          zIndex: 100,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FocusScope contain restoreFocus autoFocus>
          <View
            {...data}
            {...dialogProps}
            {...modalProps}
            ref={ref}
            style={{
              backgroundColor: 'white',
              padding: 30,
            }}
          >
            {children}
          </View>
        </FocusScope>
      </View>
    </ModalContext.Provider>
  );
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
      width={newProps._width || newProps.size || '75%'}
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
        // accessibilityLabel="Close dialog"
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
export default React.memo(React.forwardRef<ModalType, IModalProps>(Modal));

export type { IModalProps };
