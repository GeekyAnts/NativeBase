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
    //@ts-ignore - internal purpose only
    animationPreset = 'fade',
    ...rest
  }: IModalProps,
  ref: any
) => {
  const bottomInset = useKeyboardBottomInset();
  const { contentSize, _backdrop, ...resolvedProps } = usePropsResolution(
    'Modal',
    rest
  );

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
    >
      <ModalContext.Provider value={contextValue}>
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
          <Slide in={visible} overlay={false} duration={200}>
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
      </ModalContext.Provider>
    </Overlay>
  );
};

export default memo(forwardRef(Modal));
