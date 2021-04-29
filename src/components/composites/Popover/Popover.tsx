import React from 'react';
import { Popper } from '../Popper';
import type { IPopoverProps } from 'native-base';
import { mergeRefs } from '../../../utils';
import { useControllableState } from '../../../hooks';
import { PopoverContext } from './PopoverContext';
import Box from '../../primitives/Box';
import { OverlayContainer } from '@react-native-aria/overlays';
import Backdrop from '../Backdrop';
import { FocusScope } from '@react-native-aria/focus';
import { Transition } from '../Transitions';
import { StyleSheet } from 'react-native';

const Popover = React.forwardRef(function Popover(
  {
    onOpen,
    trigger,
    onClose,
    isOpen: isOpenProp,
    children,
    defaultIsOpen,
    initialFocusRef,
    finalFocusRef,
  }: IPopoverProps,
  ref: any
) {
  const triggerRef = React.useRef(null);
  const mergedRef = mergeRefs([triggerRef]);
  const [isOpen, setIsOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: (value) => {
      value ? onOpen && onOpen() : onClose && onClose();
    },
  });

  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  let updatedTrigger = () => {
    return trigger(
      {
        ref: mergedRef,
        onPress: handleOpen,
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
          exitDuration={100}
          entryDuration={150}
        >
          <Popper onClose={handleClose} triggerRef={triggerRef}>
            <Backdrop onPress={handleClose} bg="transparent" />
            <PopoverContext.Provider
              value={{ onClose: handleClose, initialFocusRef, finalFocusRef }}
            >
              <FocusScope contain restoreFocus autoFocus>
                {children}
              </FocusScope>
            </PopoverContext.Provider>
          </Popper>
        </Transition>
      </OverlayContainer>
    </Box>
  );
});

export { Popover };
