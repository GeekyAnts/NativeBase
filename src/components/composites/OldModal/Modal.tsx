import React, { RefObject, useEffect, ReactNode } from 'react';
import { KeyboardAvoidingView, Modal as RNModal, Platform } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space } from 'styled-system';
import { useOverlay } from '../../../core/Overlay';
import { useThemeProps } from '../../../hooks';
//@ts-ignore - Todo - fix types to typings in rn-aria in next version
import { FocusScope } from '@react-native-aria/focus';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
} from '../../../utils/customProps';
import { Box } from '../../primitives';
import type { IModalProps, IModalSemiProps } from './types';
import { default as ModalOverlay } from './ModalOverlay';
import { ModalContext } from './Context';
import { themeTools } from '../../../theme';

const ModalWeb = ({
  initialFocusRef,
  finalFocusRef,
  children,
}: {
  initialFocusRef?: RefObject<any>;
  finalFocusRef?: RefObject<any>;
  children: ReactNode;
}): any => {
  useEffect(() => {
    initialFocusRef?.current?.focus();
    const finalRef = finalFocusRef?.current;
    return () => {
      finalRef?.focus();
    };
  }, [initialFocusRef, finalFocusRef]);
  return children;
};

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

const Modal = (
  {
    children,
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
  ref?: any
) => {
  const { closeOverlay, setOverlay } = useOverlay();
  const [isVisible, setIsVisible] = React.useState(true);
  const closeOverlayInMobile = () => {
    setIsVisible(false);
    onClose(false);
  };
  const { contentSize, ...newProps } = useThemeProps('Modal', props);

  const value: any = {
    visible: isVisible,
    toggleVisible: setIsVisible,
    toggleOnClose: onClose ? onClose : () => {},
    contentSize: contentSize,
  };

  // Accessibility label will be added to the overlay wrapper or else VoiceOver announces it twice
  let [accessibilityProps, restProps] = themeTools.extractInObject(newProps, [
    'accessibilityLabel',
  ]);

  const modalChildren = (
    <Box
      {...restProps}
      justifyContent={justifyContent ?? 'center'}
      alignItems={alignItems ?? 'center'}
      onAccessibilityEscape={() => {
        value.toggleVisible(false);
        value.toggleOnClose(false);
      }}
    >
      {newProps.closeOnOverlayClick === false ? <Box /> : <ModalOverlay />}
      {children}
    </Box>
  );
  React.useEffect(
    () => {
      isOpen && Platform.OS === 'web'
        ? setOverlay(
            <ModalContext.Provider value={value}>
              <FocusScope
                contain
                restoreFocus={!(finalFocusRef && finalFocusRef.current)}
                autoFocus={!(initialFocusRef && initialFocusRef.current)}
              >
                <Box ref={ref} nativeID={id} w="100%" h="100%">
                  <ModalWeb
                    initialFocusRef={initialFocusRef}
                    finalFocusRef={finalFocusRef}
                  >
                    {modalChildren}
                  </ModalWeb>
                </Box>
              </FocusScope>
            </ModalContext.Provider>,
            {
              onClose: onClose,
              isKeyboardDismissable: props.isKeyboardDismissable ?? true,
              accessibilityViewIsModal: true,
              accessibilityRole: props.accessibilityRole ?? 'dialog',
              accessibilityLabel: accessibilityProps.accessibilityLabel,
              closeOnPress:
                newProps.closeOnOverlayClick === false ? false : true,
              backgroundColor: overlayColor ? overlayColor : undefined,
              disableOverlay: overlayVisible === false ? true : false,
              motionPreset: motionPreset ?? 'fade',
              position:
                justifyContent === 'flex-start'
                  ? 'top'
                  : justifyContent === 'flex-end'
                  ? 'bottom'
                  : 'center',
            }
          )
        : setOverlay(<Box />, {
            onClose: closeOverlayInMobile,
            closeOnPress: newProps.closeOnOverlayClick === false ? false : true,
            backgroundColor: overlayColor ? overlayColor : undefined,
            disableOverlay: overlayVisible === false ? true : false,
          });

      !isOpen && closeOverlay();
      setIsVisible(isOpen);
    },
    /*eslint-disable */
    [isOpen]
  );
  return Platform.OS !== 'web' ? (
    <ModalContext.Provider value={value}>
      <Box nativeID={id}>
        <StyledModal
          visible={isVisible}
          onRequestClose={() => {
            value.toggleVisible(false);
            value.toggleOnClose(false);
          }}
          onShow={() => initialFocusRef?.current?.focus()}
          onDismiss={() => finalFocusRef?.current?.focus()}
          animationType={motionPreset || 'fade'}
          transparent
          {...newProps}
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
      </Box>
    </ModalContext.Provider>
  ) : null;
};

export default React.memo(React.forwardRef(Modal));

export type { IModalProps };
