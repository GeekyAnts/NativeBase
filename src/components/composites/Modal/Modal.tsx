import React, { forwardRef, memo } from 'react';
import { StyleSheet } from 'react-native';
import Backdrop from '../Backdrop';
import { Slide } from '../Transitions';
import { FocusScope } from '@react-native-aria/focus';
import { useControllableState, usePropsResolution } from '../../../hooks';
import { ModalContext } from './Context';
import Box from '../../primitives/Box';
import type { IModalProps } from './types';
import { Fade } from '../../composites/Transitions';
import { useKeyboardBottomInset } from '../../../utils';
import { Overlay } from '../../primitives/Overlay';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

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
    backdropVisible = true,
    animationPreset,
    ...rest
  }: IModalProps,
  ref: any
) => {
  const bottomInset = useKeyboardBottomInset();
  const {
    contentSize,
    _backdrop,
    _backdropFade,
    _fade,
    _slide,
    _overlay,
    useRNModal,
    ...resolvedProps
  } = usePropsResolution('Modal', rest);

  const [visible, setVisible] = useControllableState({
    value: isOpen,
    defaultValue: defaultIsOpen,
    onChange: (val) => {
      if (!val) onClose && onClose();
    },
  });

  const handleClose = React.useCallback(() => setVisible(false), [setVisible]);

  const child = (
    <Box
      bottom={avoidKeyboard ? bottomInset + 'px' : undefined}
      {...resolvedProps}
      ref={ref}
      pointerEvents="box-none"
    >
      {children}
    </Box>
  );

  const contextValue = React.useMemo(() => {
    return {
      handleClose,
      contentSize,
      initialFocusRef,
      finalFocusRef,
      visible,
    };
  }, [handleClose, contentSize, initialFocusRef, finalFocusRef, visible]);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(rest)) {
    return null;
  }
  // console.log('visible here', visible);
  return (
    <Overlay
      isOpen={visible}
      onRequestClose={handleClose}
      isKeyboardDismissable={isKeyboardDismissable}
      animationPreset={animationPreset}
      useRNModalOnAndroid
      useRNModal={useRNModal}
      {..._overlay}
    >
      <ModalContext.Provider value={contextValue}>
        <Fade in={visible} style={StyleSheet.absoluteFill} {..._backdropFade}>
          {overlayVisible && backdropVisible && (
            <Backdrop
              onPress={() => {
                closeOnOverlayClick && handleClose();
              }}
              {..._backdrop}
            />
          )}
        </Fade>
        {animationPreset === 'slide' ? (
          <Slide in={visible} {..._slide}>
            <FocusScope
              contain={visible}
              autoFocus={visible && !initialFocusRef}
              restoreFocus={visible && !finalFocusRef}
            >
              {child}
            </FocusScope>
          </Slide>
        ) : (
          <Fade in={visible} style={StyleSheet.absoluteFill} {..._fade}>
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
    </Overlay>
  );
};

export default memo(forwardRef(Modal));
