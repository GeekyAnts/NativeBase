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
  // const { style: backdropFadeStyle } = getThemeProps(
  //   'Modal.BackdropFade',
  //   colorMode,
  //   {},
  //   rest
  // );

  // const { style: fadeStyle } = getThemeProps('Modal.Fade', colorMode, {}, rest);

  const bottomInset = useKeyboardBottomInset();
  const {
    _backdrop,
    _backdropFade,
    _fade,
    contentSize,
    _slide,
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

  // console.log(
  //   StyleSheet.flatten(style),
  //   resolvedProps,
  //   contentSize,
  //   'hello style here 2 2 2 2'
  // );
  const child = (
    <Box
      bottom={avoidKeyboard ? bottomInset + 'px' : undefined}
      {...resolvedProps}
      ref={ref}
      pointerEvents="box-none"
      // bg="red.500"
    >
      {children}
    </Box>
  );

  const contextValue = React.useMemo(() => {
    return {
      handleClose,
      contentSize: contentSize,
      initialFocusRef,
      finalFocusRef,
      visible,
    };
  }, [handleClose, contentSize, initialFocusRef, finalFocusRef, visible]);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(rest)) {
    return null;
  }
  // console.log('visible here ****', visible, restDefaultProps);
  return (
    <Overlay
      isOpen={visible}
      onRequestClose={handleClose}
      isKeyboardDismissable={isKeyboardDismissable}
      animationPreset={animationPreset}
      useRNModalOnAndroid
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
