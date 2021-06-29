import React, { memo, forwardRef } from 'react';
import type { IMenuProps } from './types';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Popper } from '../Popper';
import { AccessibilityInfo, ScrollView } from 'react-native';
import { useControllableState } from '../../../hooks';
import { useMenuTrigger, useMenu, useMenuTypeahead } from './useMenu';
import Backdrop from '../Backdrop';
import { PresenceTransition } from '../Transitions';
import { FocusScope } from '@react-native-aria/focus';
import { MenuContext } from './MenuContext';
import { Overlay } from '../../primitives/Overlay';

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

  const { transition, ...newProps } = usePropsResolution('Menu', restProps);
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
    if (isOpen) {
      AccessibilityInfo.announceForAccessibility('Popup window');
    }
  }, [isOpen]);

  return (
    <>
      {updatedTrigger()}
      <Overlay isOpen={isOpen} onRequestClose={handleClose} useRNModalOnAndroid>
        <PresenceTransition visible={isOpen} {...transition}>
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
      </Overlay>
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
