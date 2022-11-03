import React, { forwardRef, memo } from 'react';
import { Popper } from '../Popper';
import type { IPopoverProps } from './types';
import { mergeRefs } from '../../../utils';
import { useControllableState } from '../../../hooks';
import { PopoverContext } from './PopoverContext';
import Box from '../../primitives/Box';
import Backdrop from '../Backdrop';
import { FocusScope } from '@react-native-aria/focus';
import { PresenceTransition } from '../Transitions';
import { StyleSheet } from 'react-native';
import { useId } from '@react-native-aria/utils';
import { Overlay } from '../../primitives/Overlay';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { uniqueId } from 'lodash';
import { ResponsiveQueryContext } from '../../../utils/useResponsiveQuery/ResponsiveQueryProvider';

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
    useRNModal,
    trapFocus = true,
    _backdrop,
    ...props
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
  let id = uniqueId();
  const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;

  if (!disableCSSMediaQueries) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = useId();
  }

  const popoverContentId = `${id}-content`;
  const headerId = `${popoverContentId}-header`;
  const bodyId = `${popoverContentId}-body`;

  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const updatedTrigger = () => {
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
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return (
    <Box ref={ref}>
      {updatedTrigger()}
      <Overlay
        isOpen={isOpen}
        onRequestClose={handleClose}
        useRNModalOnAndroid
        useRNModal={useRNModal}
        unmountOnExit
      >
        <PresenceTransition
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 150 } }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 100 } }}
          visible={isOpen}
          style={StyleSheet.absoluteFill}
        >
          <Popper onClose={handleClose} triggerRef={triggerRef} {...props}>
            <Backdrop onPress={handleClose} bg="transparent" {..._backdrop} />
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
                isOpen,
              }}
            >
              <FocusScope contain={trapFocus} restoreFocus autoFocus>
                {children}
              </FocusScope>
            </PopoverContext.Provider>
          </Popper>
        </PresenceTransition>
      </Overlay>
    </Box>
  );
};

export default memo(forwardRef(Popover));
