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
    //@ts-ignore - internal purpose only
    animationPreset = 'fade',

    ...rest
  }: IAlertDialogProps,
  ref: any
) => {
  const bottomInset = useKeyboardBottomInset();
  const { contentSize, _backdrop, ...restThemeProps } = usePropsResolution(
    'AlertDialog',
    rest
  );

  const [visible, setVisible] = useControllableState({
    value: isOpen,
    defaultValue: defaultIsOpen,
    onChange: (val) => {
      if (!val) onClose && onClose();
    },
  });

  const handleClose = () => setVisible(false);

  let child = (
    <Box
      bottom={avoidKeyboard ? bottomInset + 'px' : undefined}
      {...restThemeProps}
      ref={ref}
      pointerEvents="box-none"
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
    >
      <AlertDialogContext.Provider
        value={{
          handleClose,
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
          <Slide overlay={false} in={visible} duration={200}>
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
      </AlertDialogContext.Provider>
    </Overlay>
  );
};

export default memo(forwardRef(AlertDialog));
