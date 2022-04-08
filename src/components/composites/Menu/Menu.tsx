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
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

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
    ...props
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

  const { transition, ...resolvedProps } = usePropsResolution('Menu', props);
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

  const updatedTrigger = () => {
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

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(resolvedProps)) {
    return null;
  }
  return (
    <>
      {updatedTrigger()}
      <Overlay
        isOpen={isOpen}
        onRequestClose={handleClose}
        useRNModalOnAndroid
        unmountOnExit
      >
        <PresenceTransition visible={isOpen} {...transition}>
          <Popper
            triggerRef={triggerRef}
            onClose={handleClose}
            placement={placement}
            {...props}
          >
            <Backdrop bg="transparent" onPress={handleClose} />
            <Popper.Content>
              <MenuContext.Provider
                value={{ closeOnSelect, onClose: handleClose }}
              >
                <FocusScope contain restoreFocus autoFocus>
                  <MenuContent menuRef={ref} {...resolvedProps}>
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
  children,
  ...props
}: Omit<IMenuProps, 'trigger'> & { menuRef: any }) => {
  const menuProps = useMenu();
  const typeaheadProps = useMenuTypeahead(menuProps);

  return (
    <Box {...props} {...menuProps} {...typeaheadProps} ref={menuRef}>
      <ScrollView>{children}</ScrollView>
    </Box>
  );
};

export default memo(forwardRef(Menu));
