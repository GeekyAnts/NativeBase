import React, { forwardRef, memo } from 'react';
import { StyleSheet } from 'react-native';
import Backdrop from '../Backdrop';
import { Slide } from '../Transitions';
import { FocusScope } from '@react-native-aria/focus';
import { useControllableState, usePropsResolution } from '../../../hooks';
import { AlertDialogContext } from './Context';
import Box from '../../primitives/Box';
import type { IAlertDialogProps } from './types';
import { Fade } from '../Transitions';
import { useKeyboardBottomInset } from '../../../utils';
import { Overlay } from '../../primitives/Overlay';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const AlertDialog = (
  {
    children,
    isOpen,
    onClose,
    defaultIsOpen,
    initialFocusRef,
    finalFocusRef,
    avoidKeyboard,
    closeOnOverlayClick = false,
    isKeyboardDismissable = true,
    overlayVisible = true,
    backdropVisible = true,
    animationPreset,
    ...rest
  }: IAlertDialogProps,
  ref: any
) => {
  const bottomInset = useKeyboardBottomInset();
  const {
    contentSize,
    _backdrop,
    _backdropFade,
    _fade,
    _slide,
    ...restThemeProps
  } = usePropsResolution('AlertDialog', rest);

  const [visible, setVisible] = useControllableState({
    value: isOpen,
    defaultValue: defaultIsOpen,
    onChange: (val) => {
      if (!val) onClose && onClose();
    },
  });

  const handleClose = () => setVisible(false);

  const child = (
    <Box
      bottom={avoidKeyboard ? bottomInset + 'px' : undefined}
      {...restThemeProps}
      ref={ref}
    >
      {children}
    </Box>
  );

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(rest)) {
    return null;
  }
  return (
    <Overlay
      isOpen={visible}
      onRequestClose={handleClose}
      isKeyboardDismissable={isKeyboardDismissable}
      useRNModalOnAndroid
      unmountOnExit
    >
      <AlertDialogContext.Provider
        value={{
          handleClose,
          contentSize,
          initialFocusRef,
          finalFocusRef,
        }}
      >
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
      </AlertDialogContext.Provider>
    </Overlay>
  );
};

export default memo(forwardRef(AlertDialog));
