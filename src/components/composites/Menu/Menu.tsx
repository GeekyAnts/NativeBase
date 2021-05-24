import React, { memo, forwardRef } from 'react';
import type { IMenuProps } from './types';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Popper } from '../Popper';
import { ScrollView, StyleSheet } from 'react-native';
import { useControllableState, useKeyboardDismissable } from '../../../hooks';
import { useMenuTrigger, useMenu, useMenuTypeahead } from './useMenu';
import Backdrop from '../Backdrop';
import { OverlayContainer } from '@react-native-aria/overlays';
import { PresenceTransition } from '../Transitions';
import { FocusScope } from '@react-native-aria/focus';
import { MenuContext } from './MenuContext';

const Menu = (
  {
    trigger,
    closeOnSelect = true,
    children,
    onOpen,
    onClose,
    isOpen: isOpenProp,
    defaultIsOpen,
    placement = 'bottom left',
    ...restProps
  }: IMenuProps,
  ref?: any
) => {
  const triggerRef = React.useRef(null);
  const [isOpen, setIsOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: (value) => {
      value ? onOpen && onOpen() : onClose && onClose();
    },
  });

  const newProps = usePropsResolution('Menu', restProps);
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

  useKeyboardDismissable({
    enabled: isOpen,
    callback: handleClose,
  });

  return (
    <>
      {updatedTrigger()}
      <OverlayContainer>
        <PresenceTransition
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 150 } }}
          exit={{ opacity: 0, transition: { duration: 150 } }}
          visible={isOpen}
          style={StyleSheet.absoluteFill}
        >
          <Popper
            triggerRef={triggerRef}
            onClose={handleClose}
            placement={placement}
            {...restProps}
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
        </PresenceTransition>
      </OverlayContainer>
    </>
  );
};

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

export default memo(forwardRef(Menu));
