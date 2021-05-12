import React, { forwardRef, memo } from 'react';
import { Popper } from '../Popper';
import type { IPopoverProps } from './types';
import { mergeRefs } from '../../../utils';
import { useControllableState } from '../../../hooks';
import { PopoverContext } from './PopoverContext';
import Box from '../../primitives/Box';
import { OverlayContainer } from '@react-native-aria/overlays';
import Backdrop from '../Backdrop';
import { FocusScope } from '@react-native-aria/focus';
import { Transition } from '../Transitions';
import { StyleSheet } from 'react-native';
import { useId } from '@react-aria/utils';

const Popover = (
  {
    onOpen,
    trigger,
    onClose,
    isOpen: isOpenProp,
    children,
    defaultIsOpen,
    initialFocusRef,
    finalFocusRef,
    trapFocus = true,
    ...rest
  }: IPopoverProps,
  ref: any
) => {
  const triggerRef = React.useRef(null);
  const mergedRef = mergeRefs([triggerRef]);
  const [isOpen, setIsOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: (value) => {
      value ? onOpen && onOpen() : onClose && onClose();
    },
  });

  const [bodyMounted, setBodyMounted] = React.useState(false);
  const [headerMounted, setHeaderMounted] = React.useState(false);

  const popoverContentId = `${useId()}-content`;
  const headerId = `${popoverContentId}-header`;
  const bodyId = `${popoverContentId}-body`;

  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  let updatedTrigger = () => {
    return trigger(
      {
        'ref': mergedRef,
        'onPress': handleOpen,
        'aria-expanded': isOpen ? true : false,
        'aria-controls': isOpen ? popoverContentId : undefined,
        'aria-haspopup': true,
      },
      { open: isOpen }
    );
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box ref={ref}>
      {updatedTrigger()}
      <OverlayContainer>
        <Transition
          from={{ opacity: 0 }}
          entry={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          visible={isOpen}
          style={StyleSheet.absoluteFill}
          entryTransition={{ duration: 100 }}
          exitTransition={{ duration: 150 }}
        >
          <Popper onClose={handleClose} triggerRef={triggerRef} {...rest}>
            <Backdrop onPress={handleClose} bg="transparent" />
            <PopoverContext.Provider
              value={{
                onClose: handleClose,
                initialFocusRef,
                finalFocusRef,
                popoverContentId,
                bodyId,
                headerId,
                headerMounted,
                bodyMounted,
                setBodyMounted,
                setHeaderMounted,
              }}
            >
              <FocusScope contain={trapFocus} restoreFocus autoFocus>
                {children}
              </FocusScope>
            </PopoverContext.Provider>
          </Popper>
        </Transition>
      </OverlayContainer>
    </Box>
  );
};

export default memo(forwardRef(Popover));
