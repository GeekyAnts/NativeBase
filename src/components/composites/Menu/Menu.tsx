import React from 'react';
import type { IMenuProps } from './types';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Popper } from '../Popper';
import { ScrollView, StyleSheet } from 'react-native';
import {
  keyboardDismissHandlerManager,
  useControllableState,
} from '../../../hooks';
import { useMenuTrigger, useMenu, useMenuTypeahead } from './useMenu';
import Backdrop from '../Backdrop';
import { OverlayContainer } from '@react-native-aria/overlays';
import { Transition } from '../Transitions';
import { FocusScope } from '@react-native-aria/focus';

export const MenuContext = React.createContext({
  closeOnSelect: true,
  onClose: () => {},
});

export const Menu = React.memo(
  React.forwardRef(
    (
      {
        trigger,
        closeOnSelect = true,
        children,
        onOpen,
        onClose,
        ...props
      }: IMenuProps,
      ref?: any
    ) => {
      const triggerRef = React.useRef(null);
      const [isOpen, setIsOpen] = useControllableState({
        value: props.isOpen,
        defaultValue: props.defaultIsOpen,
        onChange: (value) => {
          value ? onOpen && onOpen() : onClose && onClose();
        },
      });

      const newProps = usePropsResolution('Menu', props);
      const handleOpen = React.useCallback(() => {
        setIsOpen(true);
      }, [setIsOpen]);

      const handleClose = React.useCallback(() => {
        setIsOpen(false);
      }, [setIsOpen]);

      const triggerProps = useMenuTrigger({
        handleOpen,
        isOpen,
      });

      let updatedTrigger = () => {
        return trigger(
          {
            ...triggerProps,
            ref: triggerRef,
            onPress: handleOpen,
          },
          { open: isOpen }
        );
      };

      React.useEffect(() => {
        let cleanupFn = () => {};
        if (isOpen) {
          cleanupFn = keyboardDismissHandlerManager.push(handleClose);
        } else {
          cleanupFn();
        }

        return () => {
          cleanupFn();
        };
      }, [isOpen, handleClose]);

      return (
        <>
          {updatedTrigger()}
          <OverlayContainer>
            <Transition
              from={{ opacity: 0 }}
              entry={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              visible={isOpen}
              style={StyleSheet.absoluteFill}
              exitDuration={100}
              entryDuration={150}
            >
              <Popper
                triggerRef={triggerRef}
                onClose={handleClose}
                placement={props.placement ?? 'bottom left'}
                shouldOverlapWithTrigger
              >
                <Backdrop bg="transparent" onPress={handleClose} />
                <Popper.Content>
                  <MenuContext.Provider
                    value={{ closeOnSelect, onClose: handleClose }}
                  >
                    <FocusScope contain restoreFocus autoFocus>
                      <MenuContent menuRef={ref} {...newProps}>
                        {children}
                      </MenuContent>
                    </FocusScope>
                  </MenuContext.Provider>
                </Popper.Content>
              </Popper>
            </Transition>
          </OverlayContainer>
        </>
      );
    }
  )
);

const MenuContent = ({
  menuRef,
  ...restProps
}: Omit<IMenuProps, 'trigger'> & { menuRef: any }) => {
  const menuProps = useMenu();
  const typeaheadProps = useMenuTypeahead(menuProps);

  return (
    <Box {...restProps} {...menuProps} {...typeaheadProps} ref={menuRef}>
      <ScrollView>{restProps.children}</ScrollView>
    </Box>
  );
};
